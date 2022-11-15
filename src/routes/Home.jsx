import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Home/Intro'
import About from '../components/Home/About'
import Projects from '../components/Home/Projects'
import Footer from '../components/Footer/Footer'
/* import { Oval } from 'react-loader-spinner'
import { useState, useEffect } from "react"; */
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <motion.div
        initial={{y:-100}}
        animate={{y:0}}
        transition={{delay:0.8, stiffness:0, duration:0.8}}
        viewport={{once: true}}>
        <Navbar />
        </motion.div>
        <Intro />
        <About />
           <Projects />
           <Footer />
        </div>

    )
}

export default Home