export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience Exceptional Care?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Schedule your appointment with Dr. Segni today. We're here to support your healthcare journey with expertise and compassion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
            Book Appointment Now
          </button>
          <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Call Us: 09161828828
          </button>
        </div>
      </div>
    </section>
  )
}
