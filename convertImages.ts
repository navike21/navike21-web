import sharp from 'sharp'
import { glob } from 'glob'
import path from 'path'
import fs from 'fs'

const imagesFolder = './public/images'
const quality = 100
const maxSize = 2000

// Función para eliminar y recrear carpetas
const resetFolder = (folder: string) => {
  if (fs.existsSync(folder)) {
    fs.rmSync(folder, { recursive: true, force: true }) // Elimina la carpeta y su contenido
  }
  fs.mkdirSync(folder, { recursive: true }) // Vuelve a crear la carpeta vacía
}

const convertImages = async () => {
  try {
    console.log('🔍 Buscando imágenes...')
    const files = glob.sync(`${imagesFolder}/**/*.{jpg,png,jpeg}`)

    // Obtener todas las carpetas únicas donde se encontraron imágenes
    const uniqueDirs = new Set(files.map(file => path.dirname(file)))

    // Resetear y crear `thumbs/` y `converter/` en cada carpeta única
    for (const dir of uniqueDirs) {
      const thumbsFolder = path.join(dir, 'thumbs')
      const converterFolder = path.join(dir, 'converter')

      console.log(`🗑️ Eliminando carpetas en: ${dir}`)
      resetFolder(thumbsFolder)
      resetFolder(converterFolder)
    }

    // Procesar cada imagen
    for (const file of files) {
      const fileDir = path.dirname(file)
      const fileName = path.basename(file, path.extname(file))

      const thumbsFolder = path.join(fileDir, 'thumbs')
      const converterFolder = path.join(fileDir, 'converter')

      const outputWebP = path.join(converterFolder, `${fileName}.webp`)

      const outputThumbWebP = path.join(
        thumbsFolder,
        `${fileName}-700-thumb.webp`
      )

      // Obtener metadatos de la imagen
      const metadata = await sharp(file).metadata()
      let width: number = metadata.width ?? 0
      let height: number = metadata.height ?? 0

      if (width > maxSize || height > maxSize) {
        const aspectRatio = width / height
        if (width > height) {
          width = maxSize
          height = Math.round(maxSize / aspectRatio)
        } else {
          height = maxSize
          width = Math.round(maxSize * aspectRatio)
        }
      }

      // Convertir a WebP y guardar en `converter/`
      await sharp(file)
        .resize(width > 0 ? width : undefined, height > 0 ? height : undefined)
        .toFormat('webp', { quality })
        .toFile(outputWebP)
      console.log(`✅ Converted ${file} -> ${outputWebP}`)

      // Generar miniatura en WebP y guardar en `thumbs/`
      await sharp(file)
        .resize({ width: 700 })
        .toFormat('webp', { quality })
        .toFile(outputThumbWebP)
      console.log(`✅ Generated thumb: ${outputThumbWebP}`)
    }

    console.log('🎉 All images processed successfully!')
  } catch (error) {
    console.error('❌ Error converting images:', error)
  }
}

convertImages()
