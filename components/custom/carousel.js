"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
export default function Carousel({ images }) {
    const [index, setIndex] = useState(0)
    const len = images.length - 1
    if (index === -1) {
        setIndex(len)
    }
    if (index == len + 1) {
        setIndex(0)
    }
    return (
        <div className="flex justify-between items-center md:w-full md:h-full h-full md:px-4 relative">
            <button className="absolute opacity-50 px-2 h-full left-0 z-10 hover:bg-black/20 rounded-r-sm duration-200" onClick={() => { setIndex(index - 1) }}><ChevronLeft /></button>
            <img className="w-full h-full -z-50" src={images[index]} />
            <button className="absolute opacity-50 px-2 h-full right-0 z-10 hover:bg-black/20 rounded-l-sm duration-200" onClick={() => { setIndex(index + 1) }}><ChevronRight /></button>
        </div>
    )
}
