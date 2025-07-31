import { ISvgProps } from '@Types/svg'
import { uuidV7 } from '@Utils/generateKeys'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface IAnimatedLogo {
  name: string
  image: string | ((params: ISvgProps) => ReactNode)
  url?: string
  id?: string
}

interface IAnimatedLogoCloudProps {
  logos: IAnimatedLogo[]
}

export const AnimatedLogoCloud = ({ logos }: IAnimatedLogoCloudProps) => (
  <div className="w-full">
    <div className="mx-auto w-full">
      <div
        className="group relative flex gap-6 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
        }}
      >
        {Array(5)
          .fill(null)
          .map(() => (
            <div
              key={uuidV7()}
              className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
            >
              {logos.map(({ name, image }) => (
                <div key={uuidV7()} className="flex-shrink-0">
                  {typeof image === 'string' ? (
                    <Image src={image} className="h-10 w-28" alt={name} />
                  ) : (
                    image({
                      className: 'aspect-4/4 h-20 w-auto'
                    })
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  </div>
)
