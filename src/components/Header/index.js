"use client"

import { useState, useEffect } from "react"
import { X, Menu, Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  const pages = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about us",
      link: "/about",
    },
    {
      name: "gallery",
      link: "/gallery",
    },
    {
      name: "shop",
      link: "/shop",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ]

  const [state, setState] = useState({
    right: false,
    left: false,
  })

  const toggleDrawer = (anchor, open) => {
    setState({ ...state, [anchor]: open })
  }

  const [AllCartData, setAllCartData] = useState([])

  useEffect(() => {
    const getAllData = JSON.parse(localStorage.getItem("cartData") || "[]")
    if (getAllData?.length > 0) {
      setAllCartData(getAllData)
    } else {
      setAllCartData([])
    }
  }, [])

  const calculateTotalPrice = () => {
    let totalPrice = 0
    AllCartData?.forEach((item) => {
      totalPrice += item.product[0]?.ProductPrice * item.count
    })
    return totalPrice
  }

  const removeFromCart = (item) => {
    const removeData = AllCartData.filter((val) => val.product[0].unqid !== item.product[0].unqid)
    localStorage.setItem("cartData", JSON.stringify(removeData))
    setAllCartData(removeData)
  }

  const CheckOutProduct = () => {
    // Navigate to cart page
    window.location.href = "/cartpage"
  }

  const socialIcon = [
    {
      icon: Facebook,
    },
    {
      icon: Instagram,
    },
    {
      icon: Twitter,
    },
  ]

  const contactdetail = [
    {
      icon: Phone,
      text: "000 - 123 - 456789",
    },
    {
      icon: Mail,
      text: "info@example.com",
    },
  ]

  return (
    <>
    <div>

      {/* Main AppBar */}
      <header className="border-b border-2-[#f7efe5]">
        <div className="flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="w-[200px]">
            <img src="././logo.png.webp" alt="Logo" width={200} height={60} className="w-full h-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center flex-grow">
            {pages.map((val, index) => (
              <Link
                href={val.link}
                key={index}
                className="text-gray-800 mx-3 lg:mx-4 uppercase text-sm font-normal tracking-wider relative transition-all duration-300 hover:text-[#7cb33b] after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 after:bg-[#7cb33b] hover:after:w-full"
              >
                {val.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center w-[200px] justify-end">
            {/* Cart Icon */}
            <div onClick={() => toggleDrawer("right", true)} className="mx-1 sm:mx-2 md:mx-3 cursor-pointer relative">
              <div className="relative">
                <img src="././cart.svg" alt="Cart" width={24} height={24} />
                <span className="absolute -top-2 -right-2 bg-[#7cb33b] text-white text-[10px] px-[0.35rem] py-[0.1rem] rounded-full">
                  {AllCartData?.length}
                </span>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="block md:hidden">
              <div onClick={() => toggleDrawer("left", true)}>
                {state.left ? (
                  <X className="text-3xl mt-0.5 ml-1 sm:ml-2" />
                ) : (
                  <Menu className="text-3xl mt-0.5 ml-1 sm:ml-2" />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Right Drawer - Cart */}
      {state.right && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => toggleDrawer("right", false)}
            ></div>
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <div className="w-screen max-w-[280px] sm:max-w-[350px]">
                <div className="h-full flex flex-col bg-[#2c2c2c] p-3 sm:p-5 overflow-y-auto">
                  {/* Close Button */}
                  <div
                    onClick={() => toggleDrawer("right", false)}
                    className="cursor-pointer bg-white rounded-full w-10 h-10 flex items-center justify-center float-right border border-white hover:border-gray-800 transition-all duration-300"
                  >
                    <X size={20} />
                  </div>

                  {/* Cart Items */}
                  <div className="mt-16">
                    {AllCartData?.map((item, i) => (
                      <div key={i} className="flex gap-2 relative py-2.5 border-b border-white/40">
                        {/* Remove Button */}
                        <div
                          onClick={() => removeFromCart(item)}
                          className="absolute top-4 right-0 p-1 bg-white/40 rounded-full cursor-pointer hover:bg-[#7cb33b] transition-all duration-300"
                        >
                          <X size={14} />
                        </div>

                        {/* Product Image */}
                        <div className="border border-white/15 pt-0.5 px-0.5">
                          <img
                            src={`/uploads/${item.product[0]?.ProductImage}`}
                            alt={item.product[0]?.ClothesType || "Product"}
                            width={70}
                            height={70}
                            className="object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div>
                          <h3 className="font-medium text-lg text-white hover:text-amber-600 transition-all duration-300 cursor-pointer">
                            {item.product[0]?.ClothesType}
                          </h3>
                          <div className="flex gap-2">
                            <p className="mt-1 font-medium text-sm text-white">
                              Shirt : <span className="font-light">{item.product[0]?.ShirtMeter}</span>
                            </p>
                            <p className="mt-1 font-medium text-sm text-white">
                              Paint : <span className="font-light">{item.product[0]?.PaintMeter}</span>
                            </p>
                          </div>
                          <p className="mt-1 font-medium text-xs text-white">
                            {item.count} × {item.product[0]?.DiscountPrice}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Total */}
                    <div className="flex items-center justify-between mt-2">
                      <h6 className="text-xl font-extrabold text-white">Total :</h6>
                      <h6 className="text-xl font-extrabold text-white">₹ {calculateTotalPrice()}</h6>
                    </div>

                    {/* Checkout Button */}
                    <button onClick={CheckOutProduct} className="w-full bg-[#7cb33b] mt-2 py-1 text-lg text-white">
                      Check Out
                    </button>

                    {/* Social Media */}
                    <div className="my-5">
                      <h2 className="text-3xl font-normal text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-[#7cb33b]">
                        We are Social
                      </h2>
                      <div className="flex items-center mt-2">
                        {socialIcon.map((item, i) => {
                          const Icon = item.icon
                          return (
                            <div
                              key={i}
                              className="py-2 px-3 border border-white rounded-full text-center mx-1 cursor-pointer transition-all duration-300 hover:text-amber-600 hover:border-amber-600 text-white"
                            >
                              <Icon size={16} />
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="my-4">
                      <h2 className="text-3xl font-normal text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-[#7cb33b]">
                        Contact Us
                      </h2>
                      <div className="flex items-start sm:items-center mt-2 gap-2 flex-col sm:flex-row">
                        {contactdetail.map((item, i) => {
                          const Icon = item.icon
                          return (
                            <div key={i} className="flex items-center justify-start text-white">
                              <Icon size={20} className="mr-1" />
                              <p className="text-sm hover:text-amber-600 transition-all duration-300 cursor-pointer">
                                {item.text}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Left Drawer - Mobile Menu */}
      {state.left && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => toggleDrawer("left", false)}
            ></div>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <div className="w-screen max-w-[280px] sm:max-w-[350px]">
                <div className="h-full flex flex-col bg-[#7cb33b] p-3 sm:p-5 overflow-y-auto">
                  {/* Close Button */}
                  <div
                    onClick={() => toggleDrawer("left", false)}
                    className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center float-right transition-all duration-300"
                  >
                    <X size={20} />
                  </div>

                  {/* Mobile Navigation */}
                  <div className="mt-16">
                    {pages.map((item, i) => (
                      <div key={i} className="py-2 border-b border-gray-800 flex justify-between last:border-b-0">
                        <Link href={item.link} className="text-white uppercase">
                          {item.name}
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="m7 7 5 5-5 5"></path>
                          <path d="m13 7 5 5-5 5"></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
   
    </div>

    </>
  )
}

export default Header

