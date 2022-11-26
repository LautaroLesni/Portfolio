import React from "react";
import './About.css'
import { motion } from "framer-motion";
import relampago from '../../assets/mern2.png'
import { Link } from 'react-router-dom'
import resume from '../../assets/CV-Lautaro-Lesniewicz.pdf'

const About = () => {
    return (
        <div className="conocemediv">
            <motion.div className="knowmeDIV"
                initial={{ opacity: 0, y: 300 }}
                transition={{ delay: 0, duration:0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <hr className="barra" />
                <h4 className="knowme">
                    Te invito a conocerme</h4>
                <hr className="barra" />
            </motion.div>

            <motion.div className="row"
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: 0, duration:1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <div className="whoamiIMGDIV">
                    <img src={relampago} alt='relampago' />
                </div>
                <div className="contenedorwhoami">
                    <div className="whoami">
                        <hr className="barra2" />
                        <h1>¿Quien soy?</h1>
                        <hr className="barra2" />
                    </div>
                    <div className="lildescription">
                        <p>Mi nombre es Lautaro Lesniewicz y soy un programador Full Stack de Buenos Aires, Argentina. Empecé a estudiar programación porque desde chico siempre me gustó crear cosas y aprender el funcionamiento de las mismas.
                            <br />
                            <br />
                            Soy una persona que ama la tecnología desde muy temprana edad, amo los retos y soy alguien que siempre busca algo nuevo que crear y hacer, me encanta formar parte de grandes innovaciones en los proyectos que trabajo, 
                            al mismo tiempo que disfruto del trabajo en equipo y aprender de mis compañeros.
                            <br />
                            <br />
                            Algunas de las tecnologías que actualmente manejo son:
                        </p>
                        <div className="technologies">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
                        <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
                        <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman"/>
                        <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/>
                        <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop"/>
                        </div>
                        <div className="botonesAbout">
                        <Link to='/About' className="botonAbout">Conoceme más!</Link>
                        <a className="botonAbout" href={resume} target="_blank" rel="noreferrer noopener">Ver mi CV!</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About