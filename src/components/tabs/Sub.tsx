import {stacks, type Stack} from "./substacks/stacks"
import { TypeAnimation } from "react-type-animation";
import { useState } from "react"

export function Sub() {
  const [stack, setStack] = useState(-1);
    return (
      <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-2 gap-5">
        <div className="flex flex-col">
          {stacks.map((stack, i) => (
            <StackCard 
            key={stack.id} 
            stack = {stack} 
            setActive={setStack}
            index={i}/>))}
        </div>
        {stack !== -1 && (  
          <div className="bg-zinc-800 py-5 px-10 slide-up-fast h-[clamp(200px, 30vh, 50%)] my-15" key={stack}>        
              <span>
                <TypeAnimation 
                  sequence={[stacks[stack].desc]} 
                  wrapper="span"
                  speed={99}
                  style={{fontSize: 'clamp(1rem, 2.5vw, 2em)'}}
                  repeat={0}
                  cursor={false}
                  />
              </span>
          </div>
        )}
        <span className="bg-zinc-900 border-solid rounded-none border-zinc-800 border-2 p-2 col-span-full slide-in">
         <TypeAnimation sequence={['> Why I write (and why you should too): I believe very deeply in few things. A very good thought, though not always popular; is the idea that no model is perfect, very few are accurate, but some of them are useful. The art of writing is not only a method by which we attempt to commune \"thoughts\" in our mind, but also one in which we create a picture, one illustrated by the lived experiences we onerously seek to hold onto. By writing, I believe I am not only transcribing ideas, but my life, in the traces of my prose. There\'s no perfect text, and absolutely very few accurate translations from thought and intention to text, but some are useful. I hope to create some.']} 
         wrapper="span"
         speed={80}
         style={{fontSize: '1em'}}
         repeat={0}
         cursor={true}/>
        </span>
      </div>
    )
}

function StackCard({stack, setActive, index}: {stack: Stack, setActive: (id: number) => void, index: number}) {
  return (
    <div className="flex flex-row flex-1 hover:-translate-y-2 transition-transform duration-200 rounded-lg bg-zinc-900 p-4 py-10 m-2 slide-up" 
    onClick={() => setActive(stack.id)}
    style={{animationDelay: `${index * 150}ms`,
      opacity: 0,
      animationFillMode: 'forwards'
    }}>
      <a href={stack.href}>
        <TypeAnimation 
          sequence={[stack.title]} 
          wrapper="span"
          speed={5}
          style={{fontSize: '1em'}}
          repeat={0}
          cursor={false}/>
      </a>
    </div>
  )
}