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
        title: "proj1",
        desc: "desc proj 2",
        img: "/images/github.jpg",
        href: "tbd",
    },
    {
        id: 1,
        title: "proj2",
        desc: "desc proj 1",
        img: "/images/github.jpg",
        href: "tbd",
    },
        {
        id: 2,
        title: "proj3",
        desc: "desc proj 3",
        img: "/images/github.jpg",
        href: "tbd",
    }
]