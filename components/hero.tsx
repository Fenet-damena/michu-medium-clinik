'use client'

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 text-white overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/clinic-hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-0 bg-white/20" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 text-balance">
              Michhu<br />
              <span className="text-blue-900 text-4xl md:text-5xl">Medium Clinick</span>
            </h1>
            <p className="text-lg text-cyan-600 mb-4 font-semibold">
              Trusted OB/GYN Care for Every Woman
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Professional, affordable obstetrics and gynecology services with compassion and expertise.
            </p>
            
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
