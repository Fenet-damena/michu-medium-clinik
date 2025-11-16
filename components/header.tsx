'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-amber-600">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-amber-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <Link href="/" className="font-bold text-lg text-blue-900">
            MICHU<br />
            <span className="text-amber-600 text-sm">Medium Clinic</span>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
            Contact
          </Link>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-950 transition-colors">
            Book Appointment
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden flex flex-col gap-4 p-4">
            <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-950 transition-colors w-full">
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
