import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience compassionate, expert medical care in a modern, welcoming environment. Our dedicated team is here to help you achieve optimal health and wellness.
            </p>
            <div className="flex gap-4">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Book Appointment
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg h-80 flex items-center justify-center">
            <img 
              src="/modern-clinic-interior-with-doctors-and-patients.jpg" 
              alt="Healthcare clinic interior" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
