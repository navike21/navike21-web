'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { CSSProperties, useState } from 'react'

interface ISliderOptions {
  orientation?: 'horizontal' | 'vertical'
  type?: 'slide' | 'fade' // Cambiamos animationType a type
  showControls?: boolean
  slidesPerView?: number
}

interface ISliderProps {
  slides: React.ReactNode[]
  options?: ISliderOptions // Objeto de opciones
}

export const Slider = ({
  slides,
  options = {
    orientation: 'horizontal',
    type: 'slide',
    showControls: true,
    slidesPerView: 1
  }
}: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 para adelante, -1 para atrás

  const {
    orientation = 'horizontal',
    type = 'slide',
    showControls = true,
    slidesPerView = 1
  } = options

  const goToNextSlide = () => {
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % slides.length)
  }

  const goToPrevSlide = () => {
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Calcula el ancho o alto de cada slide según la orientación
  const slideStyle: CSSProperties = {
    width: orientation === 'horizontal' ? `${100 / slidesPerView}%` : '100%',
    height: orientation === 'vertical' ? `${100 / slidesPerView}%` : '100%',
    position: 'absolute', // Para superponer slides
    top: 0,
    left: 0
  }

  // Define las animaciones para el efecto de slide
  const slideAnimationVariants = {
    enter: (direction: number) => ({
      x: orientation === 'horizontal' ? (direction > 0 ? '100%' : '-100%') : 0, // Eje X para horizontal
      y: orientation === 'vertical' ? (direction > 0 ? '100%' : '-100%') : 0, // Eje Y para vertical
      opacity: 1
    }),
    center: {
      x: 0, // Posición central en X
      y: 0, // Posición central en Y
      opacity: 1
    },
    exit: (direction: number) => ({
      x: orientation === 'horizontal' ? (direction > 0 ? '-100%' : '100%') : 0, // Eje X para horizontal
      y: orientation === 'vertical' ? (direction > 0 ? '-100%' : '100%') : 0, // Eje Y para vertical
      opacity: 1
    })
  }

  // Define las animaciones para el efecto de fade
  const fadeAnimationVariants = {
    enter: { opacity: 0 }, // Slide entrante: comienza invisible
    center: { opacity: 1 }, // Slide activo: completamente visible
    exit: { opacity: 0 } // Slide saliente: se desvanece
  }

  // Selecciona las animaciones según el tipo
  const animationVariants =
    type === 'slide' ? slideAnimationVariants : fadeAnimationVariants

  // Calcula el número de dots de paginación
  const totalDots = Math.ceil(slides.length / slidesPerView)

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        minHeight: '200px'
      }}
    >
      <AnimatePresence custom={direction}>
        {slides
          .slice(currentIndex, currentIndex + slidesPerView)
          .map((slide, index) => (
            <motion.div
              key={currentIndex + index}
              custom={direction}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={slideStyle}
            >
              {slide}
            </motion.div>
          ))}
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={goToPrevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer'
            }}
          >
            Atrás
          </button>
          <button
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer'
            }}
          >
            Adelante
          </button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}
          >
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * slidesPerView)}
                style={{
                  margin: '0 5px',
                  background:
                    currentIndex === index * slidesPerView ? 'black' : 'gray',
                  borderRadius: '50%',
                  width: '10px',
                  height: '10px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
