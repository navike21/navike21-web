import {
  AboutSection,
  Clients,
  HeroSection,
  RecentWorks,
  Services
} from './components'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Clients />
      <Services />
      <RecentWorks />
    </>
  )
}
