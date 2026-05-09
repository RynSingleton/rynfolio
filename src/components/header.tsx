'use client'

export default function Header( {setActive}: {setActive: (id:number) => void} ) {
    return (
        <div className="flex items-center py-2 px-4 sm:py-3 lg:py-5 sm:px-6 lg:px-8 justify-between">
            <span>RynS.dev</span>
            <ul className="flex items-center justify-between gap-16">
                <li onClick={() => setActive(0)} className="h:">GitHub</li>
                <li onClick={() => setActive(1)}>SubStack</li>
            </ul>
        </div>
    )
}