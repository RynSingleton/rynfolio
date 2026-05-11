import { projects, type Project } from "./gitprojects/projects"
import Image from "next/image"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation";

export function Git() {
  const [proj, setProj] = useState(-1);

  return (
    <div>
      <div className="grid lg:grid-rows-2 md:grid-cols-2 sm:grid-rows-2 gap-5">
        <div className="grid grid-cols-3 grid-rows-1 gap-4 w-full">
          {projects.map((project) => (<ProjectCard key={project.id} project={project} onSelect={setProj}/>))}
        </div>
        {(proj !== -1) && (
          <div key={proj} className="bg-zinc-800 rounded-lg p-2 slide-up-fast">
                <TypeAnimation 
                  sequence={[projects[proj].desc]} 
                  wrapper="span"
                  speed={75}
                  style={{fontSize: 'clamp(1rem, 2.5vw, 2em)'}}
                  repeat={0}
                  cursor={true}/>
          </div>
        )}
      </div>
    </div>
  )
}


function ProjectCard({project, onSelect}: {project: Project, onSelect: (id: number) => void}) {
  return (
      <div className="flex-1 hover:-translate-y-2 transition-transform duration-200 rounded-lg bg-zinc-900 p-4 justify-center slide-up min-w-0"  onClick={()=> onSelect(project.id)}>
        <div className="flex flex-col items-center">
          <a href={project.href}>
            <Image 
            src={project.img}
            alt={project.title}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          </a>
          <TypeAnimation 
                  sequence={[project.title]} 
                  wrapper="span"
                  speed={2}
                  style={{fontSize: '.75rem'}}
                  repeat={0}
                  cursor={false}
                  className="p-2"/>
        </div>
      </div>
  )
}