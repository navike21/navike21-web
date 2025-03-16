import sharp from 'sharp'
import { glob } from 'glob'
import path from 'path'

const publicFolder = './public'
const quality = 100
const maxSize = 2000

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

      // Obtener metadatos de la imagen
      const metadata = await sharp(file).metadata()
      let width: number = metadata.width ?? 0
      let height: number = metadata.height ?? 0

      // Si la imagen es más grande que maxSize, redimensionarla proporcionalmente
      if (width > maxSize || height > maxSize) {
        const aspectRatio = width / height
        if (width > height) {
          width = maxSize
          height = Math.round(maxSize / aspectRatio)
        } else {
          height = maxSize
          width = Math.round(maxSize * aspectRatio)
        }
      } else {
        width = metadata.width ?? 0
        height = metadata.height ?? 0
      }

      // Convertir a WebP (versión original, redimensionada si es necesario)
      await sharp(file)
        .resize(width > 0 ? width : undefined, height > 0 ? height : undefined) // Se evita asignar undefined
        .toFormat('webp', { quality })
        .toFile(outputWebP)

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
