import type { SplideProps } from '@splidejs/react-splide'

export const useTestimonials = () => {
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

  return {
    OPTIONS
  }
}
