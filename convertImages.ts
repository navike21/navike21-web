import sharp from 'sharp'
import { glob } from 'glob'
import path from 'path'

const publicFolder = './public'
const quality = 100

const convertImages = async () => {
  try {
    const files = glob.sync(`${publicFolder}/**/*.{jpg,png,jpeg}`)

    for (const file of files) {
      const fileDir = path.dirname(file)
      const fileName = path.basename(file, path.extname(file))
      const fileExt = path.extname(file).toLowerCase().replace('.', '')
      const outputWebP = path.join(fileDir, `${fileName}.webp`)
      const thumbName = `${fileName}-700-thumb`
      const outputThumb = path.join(fileDir, `${thumbName}.${fileExt}`)
      const outputThumbWebP = path.join(fileDir, `${thumbName}.webp`)

      // Convertir a WebP (versión original)
      await sharp(file).toFormat('webp', { quality }).toFile(outputWebP)

      // Generar miniatura de 700px de ancho en el mismo formato original
      await sharp(file)
        .resize({ width: 700 })
        .toFormat(fileExt as keyof sharp.FormatEnum, { quality })
        .toFile(outputThumb)

      // Generar miniatura de 700px de ancho en WebP
      await sharp(file)
        .resize({ width: 700 })
        .toFormat('webp', { quality })
        .toFile(outputThumbWebP)

      console.log(`Converted ${file} to ${outputWebP}`)
      console.log(`Generated thumb: ${outputThumb} & ${outputThumbWebP}`)
    }

    console.log('✅ All images converted successfully!')
  } catch (error) {
    console.error('❌ Error converting images:', error)
  }
}

convertImages()
