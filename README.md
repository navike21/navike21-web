# Navike21 Web

A modern multilingual web application built with Next.js 15.1.6 and TypeScript.

## 🚀 Features

- Next.js 15.1.6 with TypeScript support
- Multi-language routing support with language subdirectories
- Dark/Light theme implementation using Zustand
- Custom fonts: Quicksand and Syne from Google Fonts
- Image optimization utilities for WebP conversion
- ESLint + Prettier configuration for code quality
- Type-safe development with strict TypeScript rules

## 🛠️ Tech Stack

- Next.js 15.1.6
- TypeScript
- React 19
- Zustand (State Management)
- Sharp (Image Processing)
- ESLint & Prettier

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/navike21-web.git

# Install dependencies
npm install
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint:scan

# Fix linting issues
npm run lint:fix

# Convert images to WebP
npm run images
```

## 🌐 Environment Setup

The project uses the following port by default:

- Development: http://localhost:3000

## 📁 Project Structure

```
src/
├── app/          # Next.js app directory
├── libs/         # Project libraries
│   ├── config/   # Configuration files
│   ├── store/    # Zustand stores
│   ├── typed/    # TypeScript types/interfaces
│   └── utils/    # Utility functions
```

## 🎨 Image Processing

The project includes a custom image conversion utility that:

- Converts images to WebP format
- Creates thumbnails (700px width)
- Maintains high quality (100%)

To convert images, run:

```bash
npm run images
```

## 🔒 Strict Type Checking

The project enforces strict TypeScript conventions:

- Type aliases must start with 'T'
- Enums must start with 'E'
- Interfaces must start with 'I'

## 📝 License

Private repository - All rights reserved

## 🤝 Contributing

This is a private project. Contact the repository owner for contribution guidelines.

## 📝 Release Notes

### v1.0.0 - Initial Release

#### Features

- Next.js 15.1.6 application with TypeScript support
- Multi-language support with language routing (`[lang]`)
- Dark/Light theme implementation using Zustand store
- Custom fonts configuration with Google Fonts (Quicksand and Syne)
- Optimized image conversion utilities for WebP format
- Custom ESLint configuration with Prettier integration
- Type-safe development with strict TypeScript configuration
- Responsive layout foundation

#### Tech Stack

- Next.js
- TypeScript
- Zustand for state management
- Sharp for image optimization
- React 19
- ESLint & Prettier for code quality

#### Setup

- Development: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint:fix`
