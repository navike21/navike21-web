import type { TestimonialsItemProps } from './testimonials.types'
import { Avatar, Card, Divider, IconComponent } from '@Components/atoms'
import { uuid } from '@Helpers/uuid'
import clsx from 'clsx'

export const TestimonialsItem = ({
  author,
  role,
  content,
  avatar,
  starRating
}: TestimonialsItemProps) => (
  <div className="w-full py-5 px-3 flex flex-col items-center">
    <Card className="max-w-80 w-[98%] h-full min-w-75">
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
