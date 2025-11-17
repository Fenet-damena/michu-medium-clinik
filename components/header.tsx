'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-amber-600">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/michu-logo.png" 
            alt="MICHU Medium Clinic Logo" 
            className="h-16 w-16 object-contain"
          />
          <div>
            <Link href="/" className="font-bold text-lg text-blue-900">
              MICHU<br />
              <span className="text-amber-600 text-sm">Medium Clinic</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
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
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
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
