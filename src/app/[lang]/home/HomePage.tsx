import {
  AboutSection,
  Clients,
  HeroSection,
  RecentWorks,
  Services
} from './components'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentWorks />
      <Clients />
      <Services />
    </>
  )
}
