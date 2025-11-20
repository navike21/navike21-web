import { Avatar, Card, Divider, IconComponent } from '@Components/atoms'
import imageTest from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Slider } from '../Slider'
import { uuid } from '@Helpers/uuid'
import type { SplideProps } from '@splidejs/react-splide'
import { testimonialsList } from '@I18n/common/testimonials'

interface ITestimonialsItemProps {
  author: string
  role: string
  content: string
  avatar: string | StaticImageData
  starRating?: number
}

export const TestimonialsItem = ({
  author,
  role,
  content,
  avatar,
  starRating
}: ITestimonialsItemProps) => (
  <div className="w-full py-5 px-3 flex flex-col items-center">
    <Card className="max-w-80 w-[98%] h-full min-w-[300px]">
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

export const Testimonials = () => {
  const OPTIONS: SplideProps['options'] = {
    perPage: 4,
    width: '100%',
    focus: 'center',
    arrows: false,
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
    <>
      {testimonialsList['es'].length > 0 ? (
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Slider options={OPTIONS}>
            {testimonialsList['es'].map(
              ({ name, position, testimonial, avatar, score }) => (
                <TestimonialsItem
                  key={uuid()}
                  author={name}
                  role={position}
                  content={testimonial}
                  avatar={avatar || imageTest}
                  starRating={score}
                />
              )
            )}
          </Slider>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
