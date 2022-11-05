import React from "react";
import lautaroimg from '../../assets/Lautaro1.png'
import { Link } from "react-router-dom";
import './Intro.css'
import { motion } from 'framer-motion'

const Intro = () => {

    return (<div className="hero">
    <div className="content">
    <motion.div className="lautaroimgdiv"
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{delay:0.3}}>
        <img src={lautaroimg} alt='Lautaro' className="lautaroimg"></img>
    </motion.div>
    <motion.div className="name"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ delay: 0.5 }}>
        <h3>I'm...</h3>
        <h2>Lautaro <br/>Lesniewicz</h2>
        </motion.div>
    </div>
    <div className="buttons">
            <Link to='/contact' className="button-62">Contactame</Link>
        </div>
    <h4 className="knowme">Te invito a conocerme.</h4>
    <div className="row">
    <div className="whoami">
    <hr className="barra"/>
        <h1>¿Quien soy?</h1>
        <hr className="barra"/>
        </div>
        <div className="lildescription">
        <p>Mi nombre es Lautaro Lesniewicz y soy un programador Full Stack de Buenos Aires, Argentina.Empecé a estudiar programación porque desde chico siempre me gustó crear cosas y aprender el funcionamiento de las mismas.
        Soy una persona que ama la tecnología desde muy temprana edad, amo los retos y soy alguien que siempre busca algo nuevo que crear y hacer, me encanta formar parte de grandes innovaciones en los proyectos que trabajo al mismo tiempo que disfruto del trabajo en equipo y aprender de mis compañeros.
        </p>
        </div>
        </div>
</div>)
}

export default Intro