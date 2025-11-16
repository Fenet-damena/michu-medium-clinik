import Header from '@/components/header'
import Hero from '@/components/hero'
import Clinic from '@/components/clinic'
import Services from '@/components/services'
import DoctorProfile from '@/components/doctor-profile'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clinic />
      <DoctorProfile />
      <Services />
      <Footer />
    </>
  )
}
