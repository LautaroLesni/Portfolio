import React from "react";
import lautaroimg from '../../assets/Lautaro1.png'
/* import { Link } from "react-router-dom"; */
import './Intro.css'
import { motion } from 'framer-motion'
import About from './About'

const Intro = () => {

    return (<div className="hero">
        <div className="content">
            <motion.div className="lautaroimgdiv"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}>
                <img src={lautaroimg} alt='Lautaro' className="lautaroimg"></img>
            </motion.div>
            <motion.div className="name"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}>
                <h3>I'm...</h3>
                <h2>Lautaro <br />Lesniewicz</h2>
            </motion.div>
        </div>
        {/*         <div className="buttons">
            <Link to='/contact' className="button-62">Contactame</Link>
        </div> */}
        <div className="quoteDIV">
            <motion.p className="quoteLauti"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
            >"Me encanta formar parte del proceso y crear aquellas cosas que las personas terminan disfrutando al final del día."</motion.p>
        </div>
    </div>)
}

export default Intro