import { StaticImage } from 'gatsby-plugin-image'
import 'normalize.css'
import * as React from 'react'
import skills from '../assets/skills.json'
import programmingSkillsIcon from '../assets/svg/programming_skills_icon.svg'
import projectsIcon from '../assets/svg/projects_icon.svg'
import softwareSkillsIcon from '../assets/svg/software_skills_icon.svg'
import ContactLinks from '../components/ContactLinks'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ProjectsDisplay from '../components/ProjectsDisplay'
import SkillsDisplay from '../components/SkillsDisplay'
import Text from '../components/Text'
import '../styles/global.css'
import * as styles from '../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <main>
      <title>Guilherme Portifólio</title>

      <NavBar />
      <Header />

      <section className={styles.aboutSection} id='about'>
        <header className={styles.aboutHeader}>
          <Text tag='h2' color='secondary' variant='subtitle'>SOBRE</Text>
        </header>
        <div className={styles.aboutContent}>
          <StaticImage className={styles.aboutAvatar} src='https://avatars.githubusercontent.com/u/40250928?v=4' alt='Your Name' objectFit='contain' />
          <Text tag='p'>
            Olá, eu me chamo Guilherme Henrique, sou estudante de sistemas de informação (7/8) e desenvolvedor WEB júnior. Meus passatempos incluem jogar jogos online e ler livros.
          </Text>
          <StaticImage className={styles.aboutStats} src='https://camo.githubusercontent.com/d235e07f465b62d25745de8f494a8d0c2b0900c4220e8b31af73664655aa4924/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6775696c6865726d656862612673686f775f69636f6e733d74727565267468656d653d64726163756c6126696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565' alt='github stats' objectFit='contain' />
        </div>
      </section>

      <section className={styles.skillsSection} id='skills'>
        <div className={styles.programmingSkillsHeader}>
          <img src={programmingSkillsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>SKILLS DE PROGRAMAÇÃO</Text>
        </div>
        <SkillsDisplay skills={skills.programming} />

        <div className={styles.softwareSkillsHeader}>
          <img src={softwareSkillsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>SKILLS EM SOFTWARE</Text>
        </div>
        <SkillsDisplay skills={skills.software} variant='circle' />
      </section>

      <section className={styles.projectsSection} id='projects'>
        <div className={styles.projectsHeader}>
          <img src={projectsIcon} alt="" />
          <Text tag='h2' color='secondary' variant='subtitle'>PROJETOS</Text>
        </div>
        <ProjectsDisplay />
      </section>

      <section className={styles.contactSection} id='contact'>
        <div className={styles.contactHeader}>
          <Text tag='h2' variant='subtitle'>ENTRE EM CONTATO PARA MAIS INFORMAÇÕES, E OBRIGADO PELA VISITA!</Text>
        </div>
        <ContactLinks />
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
