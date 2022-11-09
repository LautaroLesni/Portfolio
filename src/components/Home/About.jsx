import React from "react";
import './About.css'
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div className="conocemediv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileInView={{ opacity: 1 }}>
        <h4 className="knowme">
            Te invito a conocerme</h4>
        <div className="row">
            <div className="whoami">
                <hr className="barra" />
                <h1>¿Quien soy?</h1>
                <hr className="barra" />
            </div>
            <div className="lildescription">
                <p>Mi nombre es Lautaro Lesniewicz y soy un programador Full Stack de Buenos Aires, Argentina.Empecé a estudiar programación porque desde chico siempre me gustó crear cosas y aprender el funcionamiento de las mismas.
                    Soy una persona que ama la tecnología desde muy temprana edad, amo los retos y soy alguien que siempre busca algo nuevo que crear y hacer, me encanta formar parte de grandes innovaciones en los proyectos que trabajo al mismo tiempo que disfruto del trabajo en equipo y aprender de mis compañeros.
                </p>
            </div>
        </div>
    </motion.div>
    )
}

export default About