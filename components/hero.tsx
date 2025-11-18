'use client'

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-96 overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/clinic-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Michhu<br />
            <span className="text-white text-4xl md:text-5xl">Medium Clinick</span>
          </h1>
          <p className="text-xl text-cyan-300 mb-4 font-semibold">
            Trusted OB/GYN Care for Every Woman
          </p>
          <p className="text-lg text-white mb-8 leading-relaxed max-w-md">
            Professional, affordable obstetrics and gynecology services with compassion and expertise.
          </p>

          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  )
}
