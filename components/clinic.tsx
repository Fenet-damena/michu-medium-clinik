export default function Clinic() {
  const features = [
    {
      title: 'Expert Doctors',
      description: 'Our highly qualified medical professionals bring years of experience and expertise in their specialties.'
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and technology ensure accurate diagnosis and effective treatment.'
    },
    {
      title: 'Patient Care',
      description: 'We prioritize your comfort and well-being with compassionate, personalized medical attention.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Clinic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine medical excellence with compassionate care to provide the best healthcare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-accent font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
