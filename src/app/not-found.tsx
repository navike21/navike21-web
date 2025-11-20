import { LinkButton } from '@Components/atoms'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">Página no encontrada</h2>
        <p className="text-gray-600">
          Lo sentimos, la página que buscas no existe.
        </p>
      </div>
      <LinkButton href="/">Volver al inicio</LinkButton>
    </div>
  )
}
