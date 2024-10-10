'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from '../../../images/next.png'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="">
          <div className="flex justify-between items-center space-x-7">
            <div>
              {<Link href="/" className="flex items-center py-4 px-2">
              <Image
              className="h-8 w-fit" 
                src={logo}
              />
                <span className="font-semibold text-gray-500 text-lg">Logo</span>
              </Link>}

            </div>

            <div className="hidden md:flex items-center  space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              <Link href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</Link>
              <Link href="/contactus" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</Link>
            </div>

            <div className="py-4 px-2 text-red-500 font-semibold hover:text-green-500 transition duration-300" >
              <Link href="/auth/signin">
                Login
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Home</Link>
          <Link href="/about" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">About</Link>
          <Link href="/services" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Services</Link>
          <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Contact</Link>
        </div>
      )}
    </nav>
  )
}