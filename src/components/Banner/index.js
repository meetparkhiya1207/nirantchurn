"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Only Organic Product",
      description:
        "Creek chub Manta Ray sixgill ray Kafue pike pike characid walleye sailbearer cowfish, half-gill black bass taimen chimaera false cat shark.",
      image: "./200gm1.png",
      icon: "/placeholder.svg?height=92&width=134",
      bgColor: "bg-amber-50",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-[#f7efe5] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left side with image */}
      <div className="relative flex justify-center items-center">
        <img
          src="./Nirant.png"
          alt="Juice Bottles"
          className="max-w-full h-auto z-10 relative"
        />
      </div>
  
      {/* Right side with text */}
      <div className="text-center md:text-left relative z-10">
        <div className="mb-4 inline-block">
          <img
            src="./home1-slide1-icon.png"
            alt="Leaf Icon"
            className="inline-block w-[80px] h-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Only Organic Product
        </h1>
        <p className="text-gray-500 mt-4 text-base md:text-lg max-w-xl">
          Creek chub Manta Ray sixgill ray Kafue pike pike characid walleye
          sailbearer cowfish, half-gill black bass taimen chimaera false cat
          shark  Creek chub Manta Ray sixgill ray Kafue pike pike characid walleye
          sailbearer cowfish, half-gill black bass taimen chimaera false cat.
        </p>
        <div className="mt-6">
          <a
            href="https://demo.artureanec.com/product-category/shop-demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fd7744] hover:bg-[#e06639] text-white font-semibold py-3 px-6 rounded shadow-lg transition duration-300"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </div>
  
{/* Top Right Paint Texture */}
<div className="absolute right-0 top-0 w-full h-full max-w-[900px] pointer-events-none opacity-100 z-0">
  <img
    src="./home6-slide1-bg.png"
    alt="Paint Texture"
    className="w-full h-full object-cover"
  />
</div>

{/* Bottom Left Paint Texture */}
<div className="absolute left-0 bottom-0 w-full h-full max-w-[900px] pointer-events-none opacity-100 rotate-180 z-0">
  <img
    src="./home6-slide1-bg.png"
    alt="Paint Texture"
    className="w-full h-full object-cover"
  />
</div>

  </section>
  
  )
}

