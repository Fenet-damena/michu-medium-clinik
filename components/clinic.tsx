export default function Clinic() {
  /* Updated features to clinic-specific benefits */
  const features = [
    {
      title: 'Experienced OB/GYN Professionals',
      description: 'Our highly qualified medical professionals bring years of specialized expertise in obstetrics and gynecology.'
    },
    {
      title: 'Safe and Confidential Care',
      description: 'We prioritize your privacy and comfort with compassionate, personalized medical attention in a welcoming environment.'
    },
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art medical equipment and technology ensure accurate diagnosis and effective treatment for all procedures.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Michhu Medium Clinic
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine medical excellence with compassionate care to provide the best healthcare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600 font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
