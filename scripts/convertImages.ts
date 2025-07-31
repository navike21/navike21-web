import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
const QUALITY_ORIGINAL_WEBP = 100
const QUALITY_THUMB_WEBP = 100
const ROOT_DIR = path.join(__dirname, '../src/libs/assets/images')

const SIZES = [
  { suffix: 'large', width: 1400 },
  { suffix: 'medium', width: 850 },
  { suffix: 'small', width: 450 }
]

const TARGETS = [
  {
    folder: 'backgrounds',
    output: 'backgroundImages.ts',
    hasSubfolders: false
  },
  { folder: 'projects', output: 'projectsImages.ts', hasSubfolders: true }
]

function isImageFile(file: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
}

function toCamelCase(str: string): string {
  return str
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, c => c.toLowerCase())
}

async function cleanConvertedFolder(folder: string) {
  try {
    console.log(`🧹 Limpiando carpeta: ${folder}`)
    const files = await fs.readdir(folder)
    for (const file of files) {
      const filePath = path.join(folder, file)
      const stat = await fs.stat(filePath)
      if (stat.isFile()) {
        await fs.unlink(filePath)
      }
    }
    console.log(`✅ Limpieza completada: ${folder}`)
  } catch (error) {
    console.error(`⚠ Error limpiando carpeta "${folder}":`, error)
  }
}

async function convertImage(
  filePath: string,
  outputDir: string,
  fileName: string
) {
  console.log(`📸 Iniciando conversión del archivo: ${fileName}`)
  const originalOutput = path.join(outputDir, `${fileName}.webp`)

  try {
    await sharp(filePath)
      .webp({ quality: QUALITY_ORIGINAL_WEBP })
      .toFile(originalOutput)
    console.log(`✅ Original generado: ${fileName}.webp`)

    for (const size of SIZES) {
      const thumbOutput = path.join(
        outputDir,
        `${fileName}_${size.suffix}.webp`
      )
      await sharp(filePath)
        .resize({ width: size.width, height: undefined, fit: 'inside' })
        .webp({ quality: QUALITY_THUMB_WEBP })
        .toFile(thumbOutput)
      console.log(
        `🪄 Thumb ${size.suffix} generado: ${fileName}_${size.suffix}.webp`
      )
    }

    console.log(`✅ Conversión del archivo completada: ${fileName}`)
  } catch (error) {
    console.error(`❌ Error convirtiendo imagen "${filePath}":`, error)
  }
}

async function processDirectory(directory: string) {
  const items = await fs.readdir(directory)

  const hasImages = await Promise.all(
    items.map(async item => {
      const fullPath = path.join(directory, item)
      const stat = await fs.stat(fullPath)
      return stat.isFile() && isImageFile(item)
    })
  ).then(results => results.some(Boolean))

  if (hasImages) {
    const convertedDir = path.join(directory, 'converted')
    const exists = await fs
      .stat(convertedDir)
      .then(() => true)
      .catch(() => false)
    if (!exists) {
      await fs.mkdir(convertedDir, { recursive: true })
      console.log(`✅ Carpeta creada: ${convertedDir}`)
    } else {
      await cleanConvertedFolder(convertedDir)
    }

    for (const item of items) {
      const fullPath = path.join(directory, item)
      const stat = await fs.stat(fullPath)
      if (stat.isFile() && isImageFile(item)) {
        const fileNameWithoutExt = path.parse(item).name
        await convertImage(fullPath, convertedDir, fileNameWithoutExt)
      }
    }
  }

  for (const item of items) {
    const fullPath = path.join(directory, item)
    const stat = await fs.stat(fullPath)
    if (stat.isDirectory() && item !== 'converted') {
      await processDirectory(fullPath)
    }
  }
}

async function generateConstants() {
  for (const target of TARGETS) {
    const targetPath = path.join(ROOT_DIR, target.folder)
    const outputFile = path.join(ROOT_DIR, '../../constants', target.output)
    let importLines: string[] = []
    let objectLines: string[] = []
    let exportNames: string[] = []

    if (target.hasSubfolders) {
      const subfolders = await fs.readdir(targetPath)
      for (const sub of subfolders) {
        const convertedDir = path.join(targetPath, sub, 'converted')
        const exists = await fs
          .stat(convertedDir)
          .then(() => true)
          .catch(() => false)
        if (!exists) continue

        const files = await fs.readdir(convertedDir)
        const baseNames = new Set(
          files
            .filter(f => f.endsWith('.webp'))
            .map(f =>
              f
                .replace(/_(large|medium|small)\.webp$/, '')
                .replace(/\.webp$/, '')
            )
        )

        let innerObjectLines: string[] = []

        for (const base of baseNames) {
          const varBase = toCamelCase(`${sub}-${base}`)
          const lgVar = `${varBase}Lg`
          const mdVar = `${varBase}Md`
          const smVar = `${varBase}Sm`

          importLines.push(
            `import ${lgVar} from '@Assets/images/${target.folder}/${sub}/converted/${base}_large.webp'`
          )
          importLines.push(
            `import ${mdVar} from '@Assets/images/${target.folder}/${sub}/converted/${base}_medium.webp'`
          )
          importLines.push(
            `import ${smVar} from '@Assets/images/${target.folder}/${sub}/converted/${base}_small.webp'`
          )

          innerObjectLines.push(
            `${varBase}: {\n  lg: ${lgVar},\n  md: ${mdVar},\n  sm: ${smVar}\n}`
          )
        }

        const groupName = toCamelCase(sub)
        objectLines.push(
          `const ${groupName} = {\n  ${innerObjectLines.join(',\n  ')}\n}`
        )
        exportNames.push(groupName)
      }
    } else {
      // Caso simple: sin subcarpetas
      const convertedDir = path.join(targetPath, 'converted')
      const exists = await fs
        .stat(convertedDir)
        .then(() => true)
        .catch(() => false)
      if (!exists) continue

      const files = await fs.readdir(convertedDir)
      const baseNames = new Set(
        files
          .filter(f => f.endsWith('.webp'))
          .map(f =>
            f.replace(/_(large|medium|small)\.webp$/, '').replace(/\.webp$/, '')
          )
      )

      for (const base of baseNames) {
        const varBase = toCamelCase(base)
        const lgVar = `${varBase}Lg`
        const mdVar = `${varBase}Md`
        const smVar = `${varBase}Sm`

        importLines.push(
          `import ${lgVar} from '@Assets/images/${target.folder}/converted/${base}_large.webp'`
        )
        importLines.push(
          `import ${mdVar} from '@Assets/images/${target.folder}/converted/${base}_medium.webp'`
        )
        importLines.push(
          `import ${smVar} from '@Assets/images/${target.folder}/converted/${base}_small.webp'`
        )

        objectLines.push(
          `const ${varBase} = {\n  lg: ${lgVar},\n  md: ${mdVar},\n  sm: ${smVar}\n}`
        )
        exportNames.push(varBase)
      }
    }

    const content = `${importLines.join('\n')}\n\n${objectLines.join('\n\n')}\n\nexport { ${exportNames.join(', ')} }\n`

    await fs.writeFile(outputFile, content, 'utf-8')
    console.log(`✅ Archivo generado: ${outputFile}`)
  }
}

// === EJECUCIÓN PRINCIPAL ===
;(async () => {
  console.log('🚀 Iniciando conversión de imágenes...')
  await processDirectory(ROOT_DIR)
  console.log('✅ Conversión completada')

  console.log('🛠 Generando archivos de constants...')
  await generateConstants()
  console.log('✅ Archivos de constants generados')
})().catch(error => console.error('❌ Error general:', error))
