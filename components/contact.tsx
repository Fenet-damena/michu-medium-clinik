"use client"

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact MICHU Medium Clinic</h1>
          <p className="text-xl text-gray-700">Get in touch with us for appointments or inquiries</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-amber-600 font-semibold text-lg mb-2">📍 Location</p>
                  <p className="text-gray-700 text-lg">Nagelle Arsi 03 Wuha Limat</p>
                </div>

                <div>
                  <p className="text-amber-600 font-semibold text-lg mb-2">📞 Phone</p>
                  <a href="tel:09161828828" className="text-gray-700 text-lg hover:text-amber-600 transition-colors">
                    09161828828
                  </a>
                </div>

                <div>
                  <p className="text-amber-600 font-semibold text-lg mb-2">📧 Email</p>
                  <a
                    href="mailto:contact@michumediumclinic.com"
                    className="text-gray-700 text-lg hover:text-amber-600 transition-colors"
                  >
                    contact@michumediumclinic.com
                  </a>
                </div>

                <div>
                  <p className="text-amber-600 font-semibold text-lg mb-2">🕐 Opening Hours</p>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>

                <div>
                  <p className="text-amber-600 font-semibold text-lg mb-2">📱 Follow Us</p>
                  <a
                    href="https://instagram.com/drsegnimichuMC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-lg hover:text-amber-600 transition-colors"
                  >
                    @drsegnimichuMC
                  </a>
                </div>
              </div>
            </div>

            <button className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg">
              Book Appointment
            </button>
          </div>

          {/* Google Map Location */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Visit Us</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
              <div className="text-center">
                <p className="text-gray-600 font-semibold mb-4">📍 Nagelle Arsi 03 Wuha Limat</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.5!2d40.793!3d9.033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sNagelle%20Arsi%2003%20Wuha%20Limat%2C%20Addis%20Ababa!2sET!5e0!3m2!1sen!2set!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-600">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤰</span>
              <p className="text-gray-700">Antenatal Care</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👶</span>
              <p className="text-gray-700">Delivery Services</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏥</span>
              <p className="text-gray-700">Gynecology</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <p className="text-gray-700">Family Planning</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              <p className="text-gray-700">Ultrasound & Labs</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌸</span>
              <p className="text-gray-700">Post-Natal Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
