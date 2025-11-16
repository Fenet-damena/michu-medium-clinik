import Header from '@/components/header'
import Hero from '@/components/hero'
import Clinic from '@/components/clinic'
import WhyChooseUs from '@/components/why-choose-us'
import DoctorProfile from '@/components/doctor-profile'
import Services from '@/components/services'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clinic />
      <WhyChooseUs />
      <DoctorProfile />
      <Services />
      <Footer />
    </>
  )
}
