import { Slider } from '@Components/molecules'

export default function Home() {
  return (
    <Slider autoPlay={false}>
      <div className="h-96 bg-amber-700">1</div>
      <div className="h-96 bg-cyan-400">2</div>
      <div className="h-96">3</div>
    </Slider>
  )
}
