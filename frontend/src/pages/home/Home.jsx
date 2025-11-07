import React from 'react'

import './Home.css'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'
import Project from '../../components/projects/Project'
import Certificates from '../../components/certificates/Certificates'
import AiJourney from '../../components/aijourney/AiJourney'
import Contact from '../../components/contact/Contact'
const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Skills />
            <Project />
            <Certificates />
            <AiJourney />
            <Contact />
        </div>
    )
}

export default Home