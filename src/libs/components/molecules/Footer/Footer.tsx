import { Content } from '@Components/atoms/Content'
import { Logo } from '@Components/atoms'
import { Facebook, Instagram, WhatsApp, X } from '@Components/atoms/Icon'

export const Footer = () => (
  <>
    <div className="footer bg-gray-900 text-white py-12 relative z-50">
      <Content className="grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5">
        <section className="flex flex-col items-center justify-center gap-4 w-full sm:col-span-2 md:col-span-3 lg:col-span-2">
          <div className="flex items-center justify-start gap-3 title-xs w-full md:title-sm">
            <Logo className="w-10" /> navike21
          </div>
          <div className="paragraph-xs w-full text-gray-400">
            Somos una empresa dedicada a la creación de software con un enfoque
            en la calidad.
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="title-xs w-full">Servicios</div>
          <ul className="grid grid-cols-1 gap-2 w-full">
            <li className="paragraph-xs text-gray-400">Desarrollo Web</li>
            <li className="paragraph-xs text-gray-400">Desarrollo Móvil</li>
            <li className="paragraph-xs text-gray-400">Consultoría</li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="title-xs w-full">Área legal</div>
          <ul className="grid grid-cols-1 gap-2 w-full">
            <li className="paragraph-xs text-gray-400">
              Libro de reclamaciones
            </li>
            <li className="paragraph-xs text-gray-400">
              Términos y condiciones
            </li>
            <li className="paragraph-xs text-gray-400">
              Política de privacidad
            </li>
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
    <div className="bg-gray-950 text-gray-400 py-10 sm:py-6 border-t border-gray-700">
      <Content className="flex flex-col gap-6 items-center justify-between sm:grid-cols-2 sm:flex-row">
        <aside className="flex items-center justify-center gap-4">
          <Facebook className="h-6" />
          <Instagram className="h-6" />
          <X className="h-6" />
          <WhatsApp className="h-6" />
        </aside>
        <div className="paragraph-xs text-center">
          © 2025 navike21 | Todos los derechos reservados.
        </div>
      </Content>
    </div>
  </>
)
