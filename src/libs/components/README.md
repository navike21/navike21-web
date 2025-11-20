# Componentes UI Navike21

Este directorio contiene los componentes reutilizables del sistema de diseño Navike21, organizados bajo el patrón atomic design.

## Estructura

- **atoms/**: Componentes básicos y fundamentales (botones, íconos, avatares, etc.)
- **molecules/**: Combinaciones de átomos que forman bloques funcionales (headers, footers, sliders, etc.)

---

## Atoms

### Avatar

- `Avatar.tsx`: Componente de avatar de usuario.

### Button

- `Button.tsx`: Botón reutilizable con variantes.

### Card

- `Card.tsx`: Tarjeta básica para mostrar contenido.

### clientsLogo

- Logos de clientes (varios archivos `.tsx`), centralizados en `index.ts`.

### Container

- `Container.tsx`: Contenedor con padding y breakpoints responsivos.

### Divider

- `Divider.tsx`: Separador visual.
- `divider.hooks.ts`: Hooks relacionados.
- `divider.types.ts`: Tipos del Divider.

### IconComponent

- `IconComponent.tsx`: Renderiza íconos SVG.

### LinkButton

- `LinkButton.tsx`: Botón que actúa como enlace.

### Logo

- `Logo.tsx`: Logo principal de la marca.

### MenuIcon

- `MenuIcon.tsx`: Ícono para menús desplegables.

### ParallaxImage

- `ParallaxImage.tsx`: Imagen con efecto parallax.

### Title

- `Title.tsx`: Título de sección con subtítulo.

---

## Molecules

### Clients

- `Clients.tsx`: Muestra logos de clientes.

### Footer

- `Footer.tsx`: Pie de página.
- `footer.hooks.ts`: Hooks del footer.
- `ItemFooter.tsx`: Ítem individual del footer.

### Header

- `Header.tsx`: Encabezado principal.
- `header.hooks.ts`: Hooks del header.

### ItemHeroSection

- `ItemHeroSection.tsx`: Sección principal del hero.

### LayoutScroll

- `LayoutScroll.tsx`: Layout con scroll animado.

### Menu

- `Menu.tsx`: Menú de navegación.
- `menu.hooks.ts`: Hooks del menú.

### Slider

- `Slider.tsx`: Carrusel de elementos.
- `slider.types.ts`: Tipos del slider.
- `SliderArrowButton.tsx`: Botón de flecha para slider.
- `SliderDotButton.tsx`: Botón de punto para slider.

### Testimonials

- `Testimonials.tsx`: Testimonios de clientes.

---

Cada carpeta incluye un `index.ts` para facilitar los imports.

> Para detalles de props y ejemplos de uso, consulta la documentación de cada componente o revisa los archivos `.tsx` correspondientes.
