//static array data, create static type and make array

export type Project = {
    id: number
    title: string
    desc: string
    img: string
    href: string
}

export const projects: Project[] = [
    {
        id: 0,
        title: "(ID) autoscripter",
        desc: "(In Development) My first real forray into writing scripts beyond using them to compile stuff for class. Written in Python, uses Jinja2 to create templated scripts in a CLI driven program. Fun to toy with, might add more (like prompting) in later releases.",
        img: "/images/bash2.png",
        href: "https://github.com/RynSingleton/autoscripter/tree/main",
    },
    {
        id: 1,
        title: "(ID) audiovis",
        desc: "(In Development) I've always been super interested in actually utilizing the Fast Fourier Transform on my own. With a little matplotlib and numpy, a simple audio visualizer from .wav files.",
        img: "/images/visuals.gif",
        href: "tbd",
    },
        {
        id: 2,
        title: "Golden FPM",
        desc: "This is a golden IEE FPM implementation. It's a polished version of a project I completed in my advanced computer archetecture class. It's written in Verilog, and extensive documentation has been attached, as VHDL is a bit paiunful to read without it.",
        img: "/images/mult.jpg",
        href: "tbd",
    },
        {
        id: 3,
        title: "Devving Next",
        desc: "Working on stuff, check back later",
        img: "/images/github.jpg",
        href: "https://github.com/RynSingleton/",
        }
]