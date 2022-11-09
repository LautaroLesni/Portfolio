import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Home/Intro'
import About from '../components/Home/About'
/* import { Oval } from 'react-loader-spinner'
import { useState, useEffect } from "react"; */
import { motion } from "framer-motion";

const Home = () => {
/*     const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        },3000)
    }, []) */

    return (
        <div>
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
            </div>

        </div>

    )
}

export default Home