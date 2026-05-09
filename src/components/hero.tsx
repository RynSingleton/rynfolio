import HeroContent from "./HeroContent"

export default function Hero({id}: {id: number}) {
    return (
      <div>
        <HeroContent id={id}/>
      </div>
    )
}