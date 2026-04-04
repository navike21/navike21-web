'use client'

import { Button } from '@Components/atoms/Button/Button'
import { Container } from '@Components/atoms/Container/Container'
import { LinkButton } from '@Components/atoms/LinkButton/LinkButton'
import { ParallaxImage } from '@Components/atoms/ParallaxImage/ParallaxImage'
import { Title } from '@Components/atoms/Title/Title'
import imageNewsletter from '@Assets/background/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg'
import { useNewsletterForm } from './NewsletterForm.hooks'
import { InputField } from '@Components/molecules/InputField/InputField'
import clsx from 'clsx'
import { MoreDataModal } from './components/MoreDataModal/MoreDataModal'

export const NewsletterForm = () => {
  const {
    handleSubmit,
    register,
    error: { isError, errorMessage },
    formText: {
      form: { email, submitButton, termsAccepted },
      subTitle,
      title
    },
    isOpenModal,
    emailValue,
    handleCloseModal
  } = useNewsletterForm()

  return (
    <>
      <section className="bg-gray-100 relative">
        <Container
          className={clsx(
            'flex items-center justify-between flex-wrap content-center z-10 relative py-20',
            'md:gap-8 md:flex-nowrap',
            'lg:gap-20'
          )}
        >
          <section
            className={clsx(
              'w-full flex flex-col gap-4',
              'md:w-9/12 md:gap-6',
              'lg:w-7/12 lg:gap-6'
            )}
          >
            <Title align="left" title={title} subTitle={subTitle} />
            <form
              onSubmit={handleSubmit}
              className={clsx(
                'w-11/12 flex gap-4 items-end flex-nowrap flex-col max-w-xl relative -mt-2',
                'sm:flex-row',
                'xl:w-[85%]'
              )}
            >
              <InputField
                type="email"
                label={email.label}
                errorMessage={errorMessage}
                variant={isError ? 'error' : 'default'}
                className="w-full"
                helperText={
                  <div className="gap-1">
                    {termsAccepted.disclaimer}{' '}
                    <LinkButton
                      variant="text"
                      size="small"
                      href="/privacy-policy"
                    >
                      {termsAccepted.textPolicy}
                    </LinkButton>
                  </div>
                }
                {...register(email.fieldName)}
              />
              <Button
                type="submit"
                variant="primary"
                size="medium"
                className="mt-6"
              >
                {submitButton}
              </Button>
            </form>
          </section>
        </Container>
        <ParallaxImage
          img={imageNewsletter}
          className={clsx(
            'absolute top-0 right-0 h-full z-0 w-12/12 opacity-50 clip-diagonal',
            'md:w-4/12 md:opacity-100',
            'lg:w-5/12',
            'xl:w-6/12'
          )}
          alt="Newsletter background image"
        />
      </section>
      <MoreDataModal
        isOpenModal={isOpenModal}
        emailValue={emailValue}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
