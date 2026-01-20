import imageTest from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'
import { uuid } from '@Helpers/uuid'
import { testimonialsList } from '@I18n/common/testimonials'
import { ESP } from '@Constants/languages'
import { TestimonialsItem } from './TestimonialsItem'
import { useTestimonials } from './Testimonials.hooks'
import { Slider } from '@Components/molecules'

export const Testimonials = () => {
  const { OPTIONS } = useTestimonials()

  if (!testimonialsList[ESP] || testimonialsList[ESP].length === 0) {
    return null
  }

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <Slider options={OPTIONS}>
        {testimonialsList[ESP].map(
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
  )
}
