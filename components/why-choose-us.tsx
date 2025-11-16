export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "👨‍⚕️",
      title: "Experienced OB/GYN Professionals",
      description: "Led by Dr. Segni, a specialist with extensive expertise in women's healthcare"
    },
    {
      icon: "🔒",
      title: "Safe and Confidential Care",
      description: "Your privacy and comfort are our top priorities in every consultation"
    },
    {
      icon: "🏥",
      title: "Modern Equipment",
      description: "State-of-the-art medical technology for accurate diagnosis and treatment"
    },
    {
      icon: "❤️",
      title: "Friendly and Supportive Staff",
      description: "Compassionate team dedicated to making your experience comfortable and welcoming"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose MICHU Medium Clinic
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-lg border-l-4 border-amber-600 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
