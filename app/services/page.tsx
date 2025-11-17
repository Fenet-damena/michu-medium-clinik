import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'Antenatal Care',
      description: 'Comprehensive prenatal screening, monitoring, and support throughout your pregnancy journey. We provide regular checkups, ultrasounds, and counseling to ensure a healthy pregnancy.'
    },
    {
      title: 'Delivery Services',
      description: 'Safe and supportive delivery services with experienced medical professionals and modern facilities. Our team ensures safe, comfortable delivery experiences with expert care.'
    },
    {
      title: 'Gynecology',
      description: 'Complete gynecological care including routine checkups, consultations, and specialized treatments. We address all your gynecological health concerns with professionalism and care.'
    },
    {
      title: 'Family Planning',
      description: 'Personalized family planning consultations and services to help you make informed decisions about contraception and reproductive health.'
    },
    {
      title: 'Ultrasound & Labs',
      description: 'Advanced ultrasound imaging and laboratory testing for accurate diagnosis and monitoring. We use state-of-the-art equipment for precise results.'
    },
    {
      title: 'Post-Natal Care',
      description: 'Comprehensive post-delivery care and support for mothers and newborns. We ensure proper recovery and healthy development during the critical post-natal period.'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-blue-900 py-16 md:py-24 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-600 mb-4">Our Services</h1>
            <p className="text-xl text-gray-100">Comprehensive OB/GYN care for every stage of women's health</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:border-amber-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book an Appointment?</h2>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
