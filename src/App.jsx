import AboutMain from './components/AboutSection/AboutMain'
import ContactMain from './components/ContactSection/ContactMain'
import FooterMain from './components/Footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/HeroSection/HeroGradient'
import HeroMain from './components/HeroSection/HeroMain'
import SubHeroSection from './components/HeroSection/SubHeroSection'
import NavbarMain from './components/Navbar/NavbarMain'
import ProjectMain from './components/ProjectSection/ProjectMain'
import SkillMain from './components/Skills/SkillMain'
import SubSkills from './components/Skills/SubSkills'

function App() {


  return (
      <main className='font-body'>
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
        <AboutMain/>
        <SkillMain/>
        <SubSkills/>
        <ProjectMain/>
        <ContactMain/>
        <FooterMain/>
        {/* <HelperSection/> */}
      </main>
  )
}

export default App
