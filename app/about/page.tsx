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
            <h1 className="text-5xl md:text-6xl font-bold text-amber-600 mb-4">About Michhu Medium Clinic</h1>
            <p className="text-xl text-gray-100">Dedicated to women's health through every stage of life</p>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Michhu Medium Clinic</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are dedicated to providing comprehensive women's health services with a focus on obstetrics and gynecology. Our experienced team, led by Dr. Segni, is committed to delivering safe, professional, and compassionate care to every woman who walks through our doors.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide professional, affordable, and accessible OB/GYN services to all women, ensuring they receive the highest quality care in a safe and supportive environment.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted women's health center in our community, known for excellence in obstetrics and gynecology care, where every woman feels valued, respected, and empowered.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="font-semibold">Compassion</li>
                  <li className="text-sm">We treat every patient with kindness and understanding</li>
                  <li className="font-semibold mt-4">Privacy</li>
                  <li className="text-sm">Your information is always kept confidential and secure</li>
                  <li className="font-semibold mt-4">Professionalism</li>
                  <li className="text-sm">High standards of medical excellence in all we do</li>
                  <li className="font-semibold mt-4">Respect</li>
                  <li className="text-sm">We honor your choices and dignity at all times</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Specialist</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5823568486641372061_x-removebg-preview-qlArg4yeSIhZdIKbm29JYVbJJXHdyo.png"
                  alt="Dr. Segni - OB/GYN Specialist"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Dr. Segni</h3>
                <p className="text-2xl text-amber-600 font-semibold mb-6">OB/GYN Specialist</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dr. Segni is a highly experienced obstetrician and gynecologist dedicated to providing exceptional care to women. With years of specialized training and practice in women's health, Dr. Segni brings expertise in all aspects of obstetrics and gynecology.
                </p>
                <div className="bg-blue-50 border-l-4 border-amber-600 p-6 rounded">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Areas of Expertise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Prenatal and antenatal care</li>
                    <li>• Safe delivery procedures</li>
                    <li>• Gynecological consultations and treatments</li>
                    <li>• Family planning services</li>
                    <li>• Fertility assessment and counseling</li>
                    <li>• Postnatal care</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-6 leading-relaxed">
                  Dr. Segni is committed to creating a comfortable and supportive environment for all patients, ensuring that each woman receives personalized, comprehensive care tailored to her unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Choose Us</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Your health and comfort are our top priorities</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Experienced OB/GYN Professionals</h3>
                <p className="text-gray-700">Dr. Segni and qualified medical team</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe and Confidential Care</h3>
                <p className="text-gray-700">Your privacy is our priority</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Equipment</h3>
                <p className="text-gray-700">Latest diagnostic and treatment tools</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Friendly and Supportive Staff</h3>
                <p className="text-gray-700">Compassionate care every step</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
