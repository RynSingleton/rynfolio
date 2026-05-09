"use client"
import { useState } from "react"
import { Git, Sub, Model } from "./tabs"

const tabs = [
    {id: 0, component: <Git/>},
    {id: 1, component: <Sub/>},
]

export default function HeroContent({id} : {id: number}) {

    return (
      <div>
        {tabs[id].component}
      </div>
    )
}
