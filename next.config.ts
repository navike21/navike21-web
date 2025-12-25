import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Habilitar React Strict Mode
  reactStrictMode: true,

  // Optimización de imágenes
  images: {
    qualities: [75, 85, 95, 100],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // Comprimir respuestas (mejora performance)
  compress: true,

  // Eliminar header 'x-powered-by' (seguridad)
  poweredByHeader: false,

  // Logging mejorado en desarrollo
  logging: {
    fetches: {
      fullUrl: true
    }
  },

  // Configuraciones experimentales
  experimental: {
    // Optimizar imports de paquetes grandes
    optimizePackageImports: [
      '@remixicon/react',
      '@splidejs/react-splide',
      'motion'
    ],
    // staleTimes para cache optimization
    staleTimes: {
      dynamic: 30,
      static: 180
    }
  }
}

export default nextConfig
