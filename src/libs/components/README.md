# Componentes UI Navike21 ✨

Este directorio contiene los componentes reutilizables del sistema de diseño Navike21, organizados bajo el patrón Atomic Design. Hecho con cariño :D

## Estructura

- `atoms/`: Componentes básicos y fundamentales (botones, íconos, avatares, etc.)
- `molecules/`: Combinaciones de átomos que forman bloques funcionales (header, footer, sliders, etc.)

Cada componente vive en su propia carpeta y exporta su API pública desde un `index.ts`.

## Imports recomendados

Se recomienda importar desde los barrels de cada capa (aprovechando el alias `@Components/*` definido en `tsconfig.json`):

```ts
import { Button, Title } from '@Components/atoms'
import { Footer, Header } from '@Components/molecules'
```

---

## Atoms

### Avatar

- Propósito: avatar de usuario.
- Archivos:

```text
Avatar.tsx
Avatar.hooks.ts
Avatar.types.ts
Avatar.test.tsx
index.ts
```

### Button

- Propósito: botón reutilizable.
- Archivos:

```text
Button.tsx
Button.test.tsx
index.ts
```

### Card

- Propósito: tarjeta base para mostrar contenido.
- Archivos:

```text
Card.tsx
Card.types.ts
Card.test.tsx
index.ts
```

### clientsLogo

- Propósito: set de logos de clientes.
- Archivos:

```text
# logos
Almazen.tsx
Anker.tsx
Beats.tsx
Carbyne.tsx
Circurela.tsx
ColegioLaUnion.tsx
Eurogourmet.tsx
HammerBlocs.tsx
RkPower.tsx
TentacionesGourmet.tsx

# tests / exports
clientsLogo.test.tsx
index.ts
```

### Container

- Propósito: contenedor con padding y breakpoints.
- Archivos:

```text
Container.tsx
Container.test.tsx
index.ts
```

### Divider

- Propósito: separador visual.
- Archivos:

```text
Divider.tsx
divider.hooks.ts
divider.types.ts
Divider.test.tsx
index.ts
```

### IconComponent

- Propósito: renderizar íconos SVG.
- Archivos:

```text
IconComponent.tsx
IconComponent.test.tsx
index.ts
```

### LinkButton

- Propósito: botón que actúa como enlace.
- Archivos:

```text
LinkButton.tsx
LinkButton.test.tsx
index.ts
```

### Logo

- Propósito: logo principal de la marca.
- Archivos:

```text
Logo.tsx
Logo.test.tsx
index.ts
```

### MenuIcon

- Propósito: ícono para menús (hamburger / toggle).
- Archivos:

```text
MenuIcon.tsx
MenuIcon.test.tsx
index.ts
```

### ParallaxImage

- Propósito: imagen con efecto parallax.
- Archivos:

```text
ParallaxImage.tsx
ParallaxImage.test.tsx
index.ts
```

### Title

- Propósito: título de sección (título + subtítulo).
- Archivos:

```text
Title.tsx
Title.test.tsx
index.ts
```

---

## Molecules

### Clients

- Propósito: sección de clientes (incluye render de logos).
- Archivos:

```text
Clients.tsx
Clients.test.tsx
__snapshots__/
index.ts
```

### Footer

- Propósito: pie de página.
- Archivos:

```text
Footer.tsx
footer.hooks.ts
ItemFooter.tsx

Footer.test.tsx
ItemFooter.test.tsx
footer.hooks.test.ts

index.ts
```

### Header

- Propósito: encabezado principal.
- Archivos:

```text
Header.tsx
header.hooks.ts

Header.test.tsx
header.hooks.test.ts

index.ts
```

### ItemHeroSection

- Propósito: item/parte de la sección Hero.
- Archivos:

```text
ItemHeroSection.tsx
ItemHeroSection.test.tsx
index.ts
```

### LayoutScroll

- Propósito: layout con scroll animado.
- Archivos:

```text
LayoutScroll.tsx
layoutScroll.hooks.ts

LayoutScroll.test.tsx
layoutScroll.hooks.test.ts

index.ts
```

### Menu

- Propósito: menú de navegación.
- Archivos:

```text
Menu.tsx
menu.hooks.ts

Menu.test.tsx
menu.hooks.test.ts

index.ts
```

### Slider

- Propósito: carrusel/slider.
- Archivos:

```text
Slider.tsx
SliderArrowButton.tsx
SliderDotButton.tsx
slider.types.ts

Slider.test.tsx
SliderButtons.test.tsx

index.ts
```

### Testimonials

- Propósito: sección de testimonios.
- Archivos:

```text
Testimonials.tsx
TestimonialsItem.tsx
testimonials.hooks.ts
testimonials.types.ts

Testimonials.test.tsx
testimonials.hooks.test.ts

index.ts
```

---

## Notas

- Tests: la mayoría de componentes incluyen `*.test.tsx` (y algunos hooks `*.test.ts`).
- API pública: importa siempre desde el `index.ts` de cada carpeta para evitar dependencias internas.

---

## Cómo agregar un componente nuevo

Esta guía describe el flujo que se usa actualmente en este repo para mantener imports consistentes.

### 1) Elige la capa correcta

- `atoms/`: piezas simples y reutilizables (sin lógica compleja de composición).
- `molecules/`: combinaciones de átomos (secciones/bloques completos).

### 2) Crea la carpeta del componente

- Crea una carpeta con el nombre del componente en PascalCase:

```text
src/libs/components/atoms/MyComponent/
# o
src/libs/components/molecules/MyComponent/
```

### 3) Agrega el/los archivos del componente

Patrones usados en el repo (elige lo que aplique):

```text
MyComponent.tsx
MyComponent.test.tsx
MyComponent.types.ts
MyComponent.hooks.ts
index.ts
```

Notas:

- No todos los componentes tienen `hooks` o `types` (se agregan cuando aportan valor).
- En algunos componentes existentes los archivos de hooks/types usan nombres en minúscula (ej. `divider.hooks.ts`). Si estás extendiendo un componente existente, sigue su convención.

### 4) Exporta desde el `index.ts` del componente

Dentro de la carpeta del componente, expón solo lo público. Ejemplo típico:

```ts
export * from './MyComponent'
export * from './MyComponent.types'
```

### 5) Exporta desde el barrel del nivel (atoms/molecules)

Para que se pueda importar desde `@Components/atoms` o `@Components/molecules`, agrega el export en:

```text
src/libs/components/atoms/index.ts
src/libs/components/molecules/index.ts
```

Ejemplo:

```ts
export * from './MyComponent'
```

### 6) Usa el alias de paths en los imports

Preferir:

```ts
import { MyComponent } from '@Components/atoms'
```

Evitar imports internos (rutas profundas) cuando no sea necesario.
