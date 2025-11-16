export default function Services() {
  /* Updated services to OB/GYN clinic offerings */
  const services = [
    {
      title: 'Antenatal Care',
      description: 'Comprehensive prenatal screening, monitoring, and support throughout your pregnancy journey.'
    },
    {
      title: 'Delivery Services',
      description: 'Safe and supportive delivery services with experienced medical professionals and modern facilities.'
    },
    {
      title: 'Gynecology',
      description: 'Complete gynecological care including routine checkups, consultations, and specialized treatments.'
    },
    {
      title: 'Family Planning',
      description: 'Personalized family planning consultations and services to help you make informed decisions.'
    },
    {
      title: 'Ultrasound & Labs',
      description: 'Advanced ultrasound imaging and laboratory testing for accurate diagnosis and monitoring.'
    },
    {
      title: 'Post-Natal Care',
      description: 'Comprehensive post-delivery care and support for mothers and newborns.'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive OB/GYN services to meet all your healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us for More Information
          </button>
        </div>
      </div>
    </section>
  )
}
