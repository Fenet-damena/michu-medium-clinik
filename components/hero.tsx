'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-pink-800/40 to-purple-900/50"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center space-y-8 sm:space-y-10">
          {/* Title with enhanced styling */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl tracking-tight">
            Michhu Medium Clinick
          </h1>

          {/* Subtitle - Doctor info */}
          <p className="text-lg sm:text-xl text-pink-200 font-semibold drop-shadow-lg">
            Dr Segni (OBS/GYN Specialist)
          </p>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl text-pink-100 font-semibold drop-shadow-md leading-tight">
            Trusted OB/GYN Care for Every Woman
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Professional, affordable obstetrics and gynecology services with compassion and expertise. Your health and comfort are our top priorities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-pink-400 hover:bg-pink-500 text-white text-base sm:text-lg px-10 py-4 rounded-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-white bg-white/15 hover:bg-white/25 text-white text-base sm:text-lg px-10 py-4 rounded-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Contact Info Box */}
          <div className="mt-12 bg-blue-700/80 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto shadow-2xl border border-white/20">
            <p className="text-white font-semibold text-sm mb-3 flex items-center justify-center gap-2">
              <span>📍</span> Location
            </p>
            <p className="text-white font-bold text-lg mb-4">Nagelle Arsi 03 Wuha Limat</p>
            <p className="text-pink-200 font-semibold mb-2 flex items-center justify-center gap-2">
              <span>📞</span> 09161828828
            </p>
            <p className="text-pink-200 text-sm flex items-center justify-center gap-2">
              <span>📱</span> @drsegnimichuMC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
