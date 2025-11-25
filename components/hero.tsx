'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-700/35 to-blue-800/45"></div>

      {/* Content container with refined layout */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl text-center space-y-6 sm:space-y-8">
          {/* Clinic name with professional typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl tracking-tight leading-tight">
            Michu Medium Clinick
          </h1>

          {/* Doctor credentials */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-pink-100 font-semibold drop-shadow-lg">
              Dr Segni (OBS/GYN Specialist)
            </p>
            <p className="text-white/90 text-sm sm:text-base font-medium">Trusted Women's Healthcare Services</p>
          </div>

          {/* Main tagline */}
          <p className="text-2xl sm:text-3xl lg:text-4xl text-pink-50 font-semibold drop-shadow-md leading-tight">
            Trusted OB/GYN Care for Every Woman
          </p>

          {/* Professional description */}
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Professional, affordable obstetrics and gynecology services with compassion and expertise. Your health and comfort are our top priorities.
          </p>

          {/* Action buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-pink-400 hover:bg-pink-500 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-white bg-white/15 hover:bg-white/25 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                View Services
              </Button>
            </Link>
          </div>

         
        </div>
      </div>
    </section>
  )
}
