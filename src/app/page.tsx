import AboutMe from "./components/home/about-me"
import CertificatesSection from "./components/home/certificates"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"
import ServiceLetters from "./components/home/service"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <CertificatesSection />
        <ServiceLetters />
        <LatestWork />
        <Contact />
      </main>
    </>
  )
}

export default page