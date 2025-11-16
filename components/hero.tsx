import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-blue-900 py-20 md:py-32 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-amber-600 mb-6 text-balance">
              MICHU<br />
              <span className="text-amber-500 text-4xl md:text-5xl">MEDIUM CLINIC</span>
            </h1>
            <p className="text-lg text-amber-400 mb-4 font-semibold">
              Dr Segni (OBS/GYN Specialist)
            </p>
            <p className="text-xl text-gray-100 mb-4 font-semibold">
              Trusted Women's Healthcare Services
            </p>
            <div className="bg-blue-800 rounded-lg p-4 mb-8 border-l-4 border-amber-600">
              <p className="text-amber-400 font-semibold text-base mb-3">📍 Location</p>
              <p className="text-lg text-gray-100 font-semibold mb-4">
                Nagelle Arsi 03 Wuha Limat
              </p>
              <p className="text-base text-gray-300 mb-2">
                <span className="text-amber-400 font-semibold">Phone:</span> 09161828828
              </p>
              <p className="text-base text-gray-300">
                <span className="text-amber-400 font-semibold">Follow us:</span> <span className="text-amber-400">@drsegnimichuMC</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Expert OB/GYN care for antenatal services, delivery, gynecology, family planning, ultrasound, laboratory testing, and post-natal care in a compassionate, confidential environment.
            </p>
            <div className="flex gap-4">
              <button className="bg-amber-600 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                Book Appointment
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-blue-800 rounded-lg h-80 flex items-center justify-center overflow-hidden border-2 border-amber-600">
            <img 
              src="/modern-clinic-interior-with-doctors-and-patients.jpg" 
              alt="MICHU Medium Clinic - Professional healthcare facility" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
