export default function Services() {
  const services = [
    {
      title: 'General Checkup',
      description: 'Comprehensive health assessments to monitor your overall wellness and prevent health issues.'
    },
    {
      title: 'Dental Care',
      description: 'Professional dental services including cleanings, checkups, and cosmetic treatments.'
    },
    {
      title: 'Dermatology',
      description: 'Specialized skin care treatments and consultations for all skin types and conditions.'
    },
    {
      title: 'Orthopedics',
      description: 'Treatment and management of bone, joint, and muscle disorders and injuries.'
    },
    {
      title: 'Cardiology',
      description: 'Heart health evaluations and comprehensive cardiovascular disease management.'
    },
    {
      title: 'Pediatrics',
      description: 'Specialized healthcare services for infants, children, and adolescents.'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  )
}
