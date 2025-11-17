import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-blue-900 py-16 md:py-24 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-600 mb-4">About Dr. Segni</h1>
            <p className="text-xl text-gray-100">Meet the expert behind MICHU Medium Clinic</p>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5823568486641372061_x-removebg-preview-qlArg4yeSIhZdIKbm29JYVbJJXHdyo.png"
                  alt="Dr. Segni - OB/GYN Specialist"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Dr. Segni</h2>
                <p className="text-xl text-amber-600 font-semibold mb-6">OB/GYN Specialist</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dr. Segni is a highly experienced Obstetrics and Gynecology specialist dedicated to providing exceptional care to women at every stage of their health journey. With years of specialized training and practice, Dr. Segni has established a reputation for compassionate, confidential, and comprehensive women's healthcare.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-amber-600 p-4 rounded">
                    <h3 className="font-bold text-gray-900 mb-2">Specializations</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Antenatal & Prenatal Care</li>
                      <li>• Delivery & Obstetric Care</li>
                      <li>• Gynecological Health</li>
                      <li>• Family Planning Services</li>
                      <li>• Post-natal Care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Dr. Segni */}
            <div className="bg-blue-50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Dr. Segni</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Specialist</h3>
                  <p className="text-gray-700">Years of dedicated practice in OB/GYN care with proven expertise in all aspects of women's health.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
                  <p className="text-gray-700">Every patient receives personalized attention with compassion and respect for their individual needs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential & Safe</h3>
                  <p className="text-gray-700">We maintain the highest standards of confidentiality and medical ethics in all treatments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                  <p className="text-gray-700">Equipped with advanced medical technology for accurate diagnosis and effective treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
