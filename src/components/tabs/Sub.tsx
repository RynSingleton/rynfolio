import {stacks, type Stack} from "./substacks/stacks"
import { TypeAnimation } from "react-type-animation";
import { useState } from "react"


export function Sub() {
  const [stack, setStack] = useState(-1);
    return (
      <div className="grid lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:grid-rows-2 gap-5">
        <div className="flex flex-col">
          {stacks.map((stack, i) => (
            <StackCard 
            key={stack.id} 
            stack = {stack} 
            setActive={setStack}
            index={i}/>))}
        </div>
        <span className="bg-zinc-900 border-solid rounded-none border-zinc-800 border-2 p-2">
         <TypeAnimation sequence={['Why I write (and why you should too):']} 
         wrapper="span"
         speed={80}
         style={{fontSize: '1em'}}
         repeat={0}
         cursor={true}/>
        </span>
        {stack !== -1 && (  
          <div className="bg-zinc-800 rounded-lg py-5 px-10 col-span-full slide-up-fast" key={stack}>        
              <span>
                <TypeAnimation 
                  sequence={[stacks[stack].desc]} 
                  wrapper="span"
                  speed={99}
                  style={{fontSize: '3em'}}
                  repeat={0}
                  cursor={false}/>
              </span>
          </div>
        )}
      </div>
    )
}

function StackCard({stack, setActive, index}: {stack: Stack, setActive: (id: number) => void, index: number}) {
  return (
    <div className="flex flex-row flex-1 hover:-translate-y-2 transition-transform duration-200 rounded-lg bg-zinc-900 p-2 py-10 m-2 slide-up" 
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