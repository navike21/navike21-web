import { Avatar, Card, Divider, IconComponent } from '@Components/atoms'
import React from 'react'

import imageTest from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Slider } from '../Slider'
import type { EmblaOptionsType } from 'embla-carousel'
import { uuid } from '@Helpers/uuid'

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
  <Card className="max-w-80 w-11/12">
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center w-full">
        <IconComponent
          icon="RiDoubleQuotesR"
          className="w-10 h-10 text-gray-300"
        />
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
      <p>{content}</p>
    </div>
    <div className="flex flex-col gap-3 w-full">
      <Divider />
      <div className="w-full flex items-center gap-4 justify-start">
        <Avatar src={avatar} alt="User avatar" name={author} size="md" />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  </Card>
)

export const Testimonial = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(new Array(SLIDE_COUNT).keys())

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <Slider slides={SLIDES} options={OPTIONS} />
      <TestimonialItem
        author="John Doe"
        role="CEO, Company Inc."
        content="navike21 transformó nuestra presencia en línea. Su equipo es profesional y dedicado."
        avatar={imageTest}
        starRating={5}
      />
      <TestimonialItem
        author="John Doe"
        role="CEO, Company Inc."
        content="navike21 transformó nuestra presencia en línea. Su equipo es profesional y dedicado."
        avatar={imageTest}
        starRating={5}
      />
      <TestimonialItem
        author="John Doe"
        role="CEO, Company Inc."
        content="navike21 transformó nuestra presencia en línea. Su equipo es profesional y dedicado."
        avatar={imageTest}
        starRating={5}
      />
    </div>
  )
}
