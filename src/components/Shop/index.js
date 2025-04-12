"use client"

import { useState } from "react"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function BestSellers() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: "Hello Summer",
      image: "./200gm1.png",
      originalPrice: 37.0,
      price: 25.0,
      rating: 5,
      onSale: true,
    },
    {
      id: 2,
      name: "Water Mix",
      image: "./Nirant.png",
      price: 29.0,
      rating: 5,
      onSale: false,
    },
    {
      id: 3,
      name: "Summer Water",
      image: "./Nirant.png",
      price: 12.0,
      rating: 3,
      onSale: false,
    },
    {
      id: 4,
      name: "Watermelon Hello",
      image: "./200gm1.png",
      price: 47.0,
      rating: 4,
      onSale: false,
    },
    {
      id: 5,
      name: "Lemon Water",
      image: "./200gm1.png",
      price: 12.0,
      rating: 4,
      onSale: false,
    },
  ]

  const totalSlides = Math.ceil(products.length / 4)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  // Display 4 products at a time
  const visibleProducts = products.slice(currentSlide * 2, currentSlide * 2 + 2)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="text-orange-500 font-medium mb-2 italic">- Products -</div>
          <h2 className="text-4xl font-bold mb-6">Best Sellers Products</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600">
              Razorback sucker southern hake flathead catfish ropefish sabertooth fish hagfish; steelhead squarehead
              catfish bonito dojo.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="px-4"
              >
                <div className="relative">
                  <div className="relative flex justify-center">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                </div>
                <div className="p-4 ">
                  <Link  href="#" className="block">
                    <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
                  </Link>
                  <div className="flex justify-center items-center mb-3">
                    {product.onSale ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        <span className="text-orange-500 font-semibold">${product.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="text-orange-500 font-semibold">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-center">

                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
                    Add to cart
                  </button>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block hidden"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-orange-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
