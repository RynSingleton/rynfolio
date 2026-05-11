'use client'

export default function Header( {setActive}: {setActive: (id:number) => void} ) {
    return (
        <div className="flex items-center py-2 px-4 sm:py-3 lg:py-5 sm:px-6 lg:px-8 justify-between gap-10">
            <span>Ryn.dev</span>
            <ul className="flex items-center justify-between gap-16">
                <li onClick={() => setActive(0)} className="cursor-pointer">GitHub Projects</li>
                <li onClick={() => setActive(1)} className="cursor-pointer">SubStack Articles</li>
            </ul>
        </div>
    )
}