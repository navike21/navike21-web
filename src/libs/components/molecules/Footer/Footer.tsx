import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms'

export const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-white py-10">
      <Content className="grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5">
        <section className="flex flex-col items-center justify-center gap-4 w-full sm:col-span-2 md:col-span-3 lg:col-span-2">
          <div className="flex items-center justify-start gap-3 title-xs w-full md:title-sm">
            <Logo className="w-10" /> navike21
          </div>
          <div className="paragraph-xs w-full">
            Somos una empresa dedicada a la creación de software con un enfoque
            en la calidad.
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="title-xs w-full">Servicios</div>
          <ul className="grid grid-cols-1 gap-2 w-full">
            <li className="paragraph-xs">Desarrollo Web</li>
            <li className="paragraph-xs">Desarrollo Móvil</li>
            <li className="paragraph-xs">Consultoría</li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="title-xs w-full">Área legal</div>
          <ul className="grid grid-cols-1 gap-2 w-full">
            <li className="paragraph-xs">Libro de reclamaciones</li>
            <li className="paragraph-xs">Términos y condiciones</li>
            <li className="paragraph-xs">Política de privacidad</li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="title-xs w-full">Contacto</div>
          <ul className="grid grid-cols-1 gap-2 w-full">
            <li className="paragraph-xs">
              <a
                href="mailto:contacto@navike21.com"
                className="text-gray-400 hover:text-white"
              >
                contacto@navike21.com
              </a>
            </li>
            <li className="paragraph-xs">
              <a
                href="tel:+51989505027"
                className="text-gray-400 hover:text-white"
              >
                +51 989 505 027
              </a>
            </li>
            <li className="paragraph-xs">
              <a
                href="https://www.navike21.com"
                className="text-gray-400 hover:text-white"
              >
                www.navike21.com
              </a>
            </li>
          </ul>
        </section>
      </Content>
    </div>
  )
}
