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
    <section className="relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 absolute inset-0 ${slide.bgColor}`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <div className="container mx-auto px-4 h-full">
            <div className="flex flex-col md:flex-row items-center justify-between h-full py-16 md:py-24">
              <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
                <div className="space-y-6 max-w-xl mx-auto md:mx-0 transition-all duration-700 transform translate-y-0">
                  <img src={slide.icon || "/placeholder.svg"} alt="Icon" className="h-16 md:h-20 mx-auto md:mx-0" />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">{slide.title}</h1>
                  <p className="text-gray-600 text-lg">{slide.description}</p>
                  <div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md">
                      View More
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="transform transition-all duration-1000 translate-x-0">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </section>
  )
}

