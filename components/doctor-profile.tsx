export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="bg-blue-50 rounded-lg p-8 flex items-center justify-center">
              <img 
                src="/dr-segni.png" 
                alt="Dr. Segni - OB/GYN Specialist" 
                className="w-full max-w-sm h-auto object-cover"
              />
            </div>
          </div>

          {/* Doctor credentials and info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Meet Dr. Segni
            </h2>
            <p className="text-lg text-blue-700 font-semibold mb-2">
              OB/GYN Specialist
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dr. Segni is a highly qualified and experienced Obstetrics & Gynecology specialist dedicated to providing compassionate, professional healthcare to women and mothers. With extensive training and expertise, Dr. Segni offers personalized care for all women's health needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Specialized OB/GYN Care</p>
                  <p className="text-gray-600 text-sm">Expert in antenatal, delivery, and post-natal care</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Patient-Centered Approach</p>
                  <p className="text-gray-600 text-sm">Prioritizing your health, comfort, and peace of mind</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Modern Medical Expertise</p>
                  <p className="text-gray-600 text-sm">Using latest technology and medical advancements</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 font-semibold mb-3">Contact to Book Appointment:</p>
              <p className="text-blue-600 font-bold text-lg mb-2">+251 916 182 828</p>
              <p className="text-gray-600">@drsegnimichiuMC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
