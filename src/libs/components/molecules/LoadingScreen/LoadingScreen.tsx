'use client'

import { motion } from 'framer-motion'
import {
  Container,
  PulseDot,
  SpinnerCircle,
  SpinnerWrapper,
  textWave
} from './LoadingScreen.style'
import { Title } from '@Components/atoms/Title'

export function LoadingScreen() {
  return (
    <Container>
      <SpinnerWrapper>
        <SpinnerCircle />
        <PulseDot />
      </SpinnerWrapper>
      <motion.div animate={textWave.animate}>
        <Title variant="h6" sx={{ marginTop: 3, fontWeight: 500 }}>
          Loading
        </Title>
      </motion.div>
    </Container>
  )
}
