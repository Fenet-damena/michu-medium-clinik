'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/clinic-hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Soft Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/40 to-purple-600/40"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center space-y-6 sm:space-y-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Michhu Medium Clinick
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-pink-100 font-semibold drop-shadow-md">
            Trusted OB/GYN Care for Every Woman
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow">
            Professional, affordable obstetrics and gynecology services with compassion and expertise. Your health and comfort are our top priorities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-pink-400 hover:bg-pink-500 text-white text-base sm:text-lg px-8 py-3 rounded-lg font-semibold shadow-lg transition-all"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white bg-white/10 hover:bg-white/20 text-white text-base sm:text-lg px-8 py-3 rounded-lg font-semibold shadow-lg transition-all"
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
