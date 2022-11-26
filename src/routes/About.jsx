import React from "react";
import Navbar from '../components/Navbar/Navbar'
import AboutInfo from '../components/About/AboutInfo'
import Skills from '../components/About/Skills'
import Footer from '../components/Footer/Footer'


const About = () =>{
    return (
        <div>
            <Navbar />
            <AboutInfo />
            <Skills />
            <Footer />
        </div>
    )
}

export default About