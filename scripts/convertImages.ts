import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

// === CONFIGURACIÓN ===
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
const QUALITY_ORIGINAL_WEBP = 100
const QUALITY_THUMB_WEBP = 90
const THUMB_MAX_WIDTH = 1300
const THUMB_MAX_HEIGHT = 1300
const ROOT_DIR = path.join(__dirname, '../src/libs/assets/images')

// === FUNCIONES ===
function isImageFile(file: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
}

function cleanConvertedFolder(folder: string) {
  if (!fs.existsSync(folder)) return

  const files = fs.readdirSync(folder)
  for (const file of files) {
    const filePath = path.join(folder, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile()) {
      fs.unlinkSync(filePath)
    }
  }
}

async function convertImage(
  filePath: string,
  outputDir: string,
  fileName: string
) {
  const outputPath = path.join(outputDir, `${fileName}.webp`)
  const thumbPath = path.join(outputDir, `${fileName}-thumb.webp`)

  const image = sharp(filePath)

  await image.webp({ quality: QUALITY_ORIGINAL_WEBP }).toFile(outputPath)

  await image
    .resize({
      width: THUMB_MAX_WIDTH,
      height: THUMB_MAX_HEIGHT,
      fit: 'inside'
    })
    .webp({ quality: QUALITY_THUMB_WEBP })
    .toFile(thumbPath)
}

async function processDirectory(directory: string) {
  const items = fs.readdirSync(directory)

  // Pre-crear y limpiar la carpeta converted si hay imágenes
  const hasImages = items.some(
    item =>
      isImageFile(item) && fs.statSync(path.join(directory, item)).isFile()
  )
  if (hasImages) {
    const convertedDir = path.join(directory, 'converted')
    if (!fs.existsSync(convertedDir)) fs.mkdirSync(convertedDir)
    cleanConvertedFolder(convertedDir)
  }

  for (const item of items) {
    const fullPath = path.join(directory, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      if (item === 'converted') continue
      await processDirectory(fullPath)
    } else if (stat.isFile() && isImageFile(item)) {
      const folder = path.dirname(fullPath)
      const convertedDir = path.join(folder, 'converted')

      const fileNameWithoutExt = path.parse(item).name
      await convertImage(fullPath, convertedDir, fileNameWithoutExt)
      console.log(`✅ Imagen convertida: ${item}`)
    }
  }
}

// === EJECUCIÓN ===
processDirectory(ROOT_DIR)
  .then(() => console.log('🚀 Conversión completada'))
  .catch(console.error)
