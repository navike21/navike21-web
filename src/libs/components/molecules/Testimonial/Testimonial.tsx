import { Avatar, Card, Divider, IconComponent } from '@Components/atoms'
import React from 'react'

import imageTest from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Slider } from '../Slider'
import { uuid } from '@Helpers/uuid'
import type { SplideProps } from '@splidejs/react-splide'

interface ITestimonialItemProps {
  author: string
  role: string
  content: string
  avatar: string | StaticImageData
  starRating?: number
}

export const TestimonialItem = ({
  author,
  role,
  content,
  avatar,
  starRating
}: ITestimonialItemProps) => (
  <div className="w-full py-5 px-3 flex flex-col items-center">
    <Card className="max-w-80 w-[98%] h-full">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <IconComponent icon="RiDoubleQuotesR" className="w-10 h-10 text-gray-300" />
          <div className="flex gap-0.5">
            {new Array(5).fill(0).map((_, index) => (
              <IconComponent
                key={uuid()}
                icon="RiStarFill"
                className={clsx('w-5 h-5', {
                  'text-yellow-400': starRating && starRating > index,
                  'text-gray-300': !starRating || starRating <= index
                })}
              />
            ))}
          </div>
        </div>
        <p className="min-h-24">{content}</p>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Divider />
        <div className="w-full flex items-start gap-4 justify-start">
          <Avatar src={avatar} alt="User avatar" name={author} size="md" />
          <div className="h-14">
            <p className="font-semibold">{author}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
)

export const Testimonial = () => {
  const OPTIONS: SplideProps['options'] = {
    perPage: 4,
    width: '100%',
    focus: 'center',
    type: 'loop',
    breakpoints: {
      800: {
        perPage: 1
      },
      1150: {
        perPage: 2
      },
      1600: {
        perPage: 3
      }
    }
  }

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <Slider options={OPTIONS}>
        <TestimonialItem
          author="John Doe"
          role="CEO, Company Inc."
          content="navike21 transformó nuestra presencia en línea. Su equipo es profesional y dedicado."
          avatar={imageTest}
          starRating={5}
        />
        <TestimonialItem
          author="Jane Smith"
          role="Marketing Manager, Business Co."
          content="Gracias a navike21, nuestras ventas en línea se dispararon. ¡Altamente recomendado!"
          avatar={imageTest}
          starRating={4}
        />
        <TestimonialItem
          author="Alice Johnson"
          role="Freelancer"
          content="El equipo de navike21 es increíblemente talentoso y fácil de trabajar. ¡Mi sitio web nunca se vio mejor!"
          avatar={imageTest}
          starRating={5}
        />
        <TestimonialItem
          author="Bob Brown"
          role="Entrepreneur"
          content="navike21 superó mis expectativas en cada paso del camino. Su atención al detalle es insuperable."
          avatar={imageTest}
          starRating={5}
        />
        <TestimonialItem
          author="Emily Davis"
          role="Small Business Owner"
          content="Estoy encantada con el trabajo de navike21. Mi negocio ha crecido gracias a su experiencia en desarrollo web."
          avatar={imageTest}
          starRating={4}
        />
      </Slider>
    </div>
  )
}
