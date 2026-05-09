'use client'

import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Foot } from "@/components/foot";
import { useState } from "react";



export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <main className="min-h-screen grid grid-rows-[auto_2fr_auto] m-3">
        <Header setActive={setActive}/>
        <Hero id={active}/>
        <Foot/>
    </main>
  );
}
