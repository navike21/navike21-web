'use client'

import { Content } from '@Components/atoms'
import { Title } from '@Components/molecules'
import { homePageScreen } from '@Constants/backgroundsImages'
import Image from 'next/image'

export const Services = () => {
  return (
    <section className="relative">
      <Content className="sectionContent flex-col flex gap-16">
        <Title
          title="De ideas a resultados confiables"
          subtitle="Nuestros Servicios"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md aspect-2/3 flex flex-col justify-end gap-3 relative">
            <Image
              src={homePageScreen.src}
              alt="Home Page Screen"
              width={homePageScreen.width}
              height={homePageScreen.height}
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
            />
            <h3 className="title-sm font-semibold text-white z-20">
              Desarrollo Web
            </h3>
            <p className="paragraph-xs z-20">
              Creamos sitios web personalizados y aplicaciones web escalables.
            </p>
          </div>
        </div>
      </Content>
    </section>
  )
}
