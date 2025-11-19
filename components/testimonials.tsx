export default function Testimonials() {
  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Patient",
      text: "Dr. Segni and the team provided exceptional care throughout my pregnancy. I felt safe and well-informed at every step.",
      initials: "AH"
    },
    {
      name: "Fatima Mohamed",
      role: "Patient",
      text: "The clinic's modern facilities and compassionate staff made my experience memorable. Highly recommended!",
      initials: "FM"
    },
    {
      name: "Zara Abdi",
      role: "Patient",
      text: "Professional, caring, and trustworthy. Dr. Segni's expertise gave me complete confidence in my healthcare.",
      initials: "ZA"
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from women who trusted us with their healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
