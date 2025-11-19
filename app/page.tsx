import Header from '@/components/header'
import Hero from '@/components/hero'
import WhyChooseUs from '@/components/why-choose-us'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import CTASection from '@/components/cta-section'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </>
  )
}
