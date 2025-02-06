import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";

// Ruta de la carpeta pública
const publicFolder = "./public";

// Calidad de la imagen (0-100)
const quality = 80;

// Función para convertir imágenes
const convertImages = async () => {
  try {
    // Buscar archivos en la carpeta pública (recursivamente)
    const files = glob.sync(`${publicFolder}/**/*.{jpg,png,jpeg}`);

    // Convertir cada imagen a .webp
    for (const file of files) {
      const fileDir = path.dirname(file); // Carpeta de la imagen original
      const fileName = path.basename(file, path.extname(file)); // Nombre del archivo sin extensión
      const outputPath = path.join(fileDir, `${fileName}.webp`); // Ruta de salida en la misma carpeta

      // Verificar si el archivo .webp ya existe
      if (fs.existsSync(outputPath)) {
        console.log(`Skipped ${file}, ${outputPath} already exists`);
        continue; // Saltar esta imagen
      }

      // Convertir la imagen a .webp con la calidad especificada
      await sharp(file)
        .toFormat("webp", { quality }) // Ajustar la calidad aquí
        .toFile(outputPath);

      console.log(`Converted ${file} to ${outputPath}`);
    }

    console.log("✅ All images converted successfully!");
  } catch (error) {
    console.error("❌ Error converting images:", error);
  }
};

// Ejecutar la función
convertImages();
