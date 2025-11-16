import Link from 'next/link'

export default function Hero() {
  return (
    /* Updated to blue and white with clinic-specific content */
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Michhu Medium Clinick
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-semibold">
              Trusted OB/GYN Care for Every Woman.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced OB/GYN professionals provide compassionate, expert care in a safe and confidential environment. From antenatal care to delivery services and family planning, we're here for every stage of your healthcare journey with modern equipment and friendly support.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg h-80 flex items-center justify-center overflow-hidden">
            <img 
              src="/modern-clinic-interior-with-doctors-and-patients.jpg" 
              alt="Modern clinic with healthcare professionals" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
