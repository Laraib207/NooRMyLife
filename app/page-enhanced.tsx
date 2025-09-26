import Header from '../components/Header'
import HeroBig from '../components/HeroBig'
import SplitIntro from '../components/SplitIntro'
import ServicesGrid from '../components/ServicesGrid'
import ProjectsGallery from '../components/ProjectsGallery'
import ClientsStrip from '../components/ClientsStrip'
import CTAOverlay from '../components/CTAOverlay'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import FooterSite from '../components/FooterSite'

export default function Home(){
  return (
    <>
      <Header />
      <main>
        <HeroBig />
        <SplitIntro />
        <ServicesGrid />
        <ProjectsGallery />
        <ClientsStrip />
        <CTAOverlay />
        <Testimonials />
        <ContactSection />
      </main>
      <FooterSite />
    </>
  )
}
