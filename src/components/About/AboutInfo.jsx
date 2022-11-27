import React from "react";
import s from './AboutInfo.module.css'
import { motion } from "framer-motion";
import lautarolesniewicz from '../../assets/lautarolesniewicz3.png'
import resume from '../../assets/CV-Lautaro-Lesniewicz.pdf'
import { FiChevronRight } from "react-icons/fi";

const AboutInfo = () => {
    return (<div className={s.generalDIV}>
        <motion.div className={s.aboutme}
            initial={{ opacity: 0, y: 200 }}
            transition={{ delay: 0, duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1>Conoceme más</h1>
        </motion.div>

        <motion.div className={s.contenedorexterior}
            initial={{ opacity: 0, y: 200 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className={s.contenedorgeneral}>
                <div className={s.imgcontenedor}>
                    <img src={lautarolesniewicz} alt='Lautaro Lesniewicz' />
                    <a className="botonAbout" href={resume} target="_blank" rel="noreferrer noopener">Curriculum Vitae</a>
                </div>
                <div className={s.infocontenedor}>
                    <div className={s.whoami}>
                        <FiChevronRight size={30} style={{ color: '#847868' }} />
                        <h4>Quien soy?</h4>
                        <hr className={s.barra} />
                    </div>
                    <p className={s.info}>
                        Mi nombre es Lautaro Lesniewicz, soy un desarrollador web de Buenos Aires, Argentina.<br />
                        Soy una persona que ama la tecnología desde muy temprana edad, amo los retos y soy alguien que siempre busca algo nuevo que crear y hacer, me encanta formar parte de grandes innovaciones en los proyectos que trabajo, al mismo tiempo que disfruto del trabajo en equipo y aprender de mis compañeros.
                        Me encanta leer e informarme sobre nuevas tecnologías, al mismo tiempo que dar la milla extra e interiorizarme en nuevos temas ya sea, de forma autodidacta, o haciendo algún curso.<br />
                        En mis ratos libres, si no me encuentro codeando, es muy probable que esté tocando algún instrumento o jugando algún videojuego.
                        Tengo mis creencias y valores firmes, y aunque no soy un fanático religioso, creo en Dios, y que realmente hay algo más allá, que se escapa de nuestra percepción y conocimientos como humanos. <br /> <br /> </p>

                    <div className={s.whoami}>
                        <FiChevronRight size={30} style={{ color: '#847868' }} />
                        <h4>Mi paso por la programación</h4>
                    </div>

                    <p className={s.info}>Empecé a programar en 2021, aprendiendo de cursos online de manera autodidacta, mientras todavía trabajaba en el rubro de la gastronomía. Al principio comencé aprendiendo el maquetado HTML y los estilos de CSS, y después con JavaScript. <br /> Al notar que no tenía una dirección concreta de que debería aprender para ampliar mi visión, decidí iniciar mis estudios en el Bootcamp de Henry, dónde aprendí a perfeccionar mis conocimientos, y a incorporar nuevas tecnologías tanto para front end (React, Redux, Bootstrap, Nextjs, Typescript), como para el back end (Express.js, Node.js, Sequelize, PostgresSQL, MongoDB), por lo que el stack que utilizo es el MERN. También fui parte de varios proyectos, el más importante a recalcar sería el que tuve que realizar con mi equipo de trabajo para graduarme, donde desarrollamos una plataforma de trabajo, utilizando la metodología SCRUM, donde usuarios pueden registrarse y buscar trabajo, al mismo tiempo que contrataban a personas por sus servicios con un sistema de contratos. <br /> <br /></p>

                    <div className={s.whoami}>
                        <FiChevronRight size={30} style={{ color: '#847868' }} />
                        <h4>Desarrollo actual</h4>
                    </div>

                    <p className={s.info}>Actualmente me encuentro interiorizandome en aprender nuevos frameworks, y estoy muy interesado en aprender .NET utilizando C# como lenguaje de programación, ya que despues de investigar, llegué a la conclusión de que dicha plataforma se adapta a las necesidades de mis proyectos a futuro al permitirme llevarlos a diferentes plataformas.
                        Por otro lado aprender C# me permite basar mis conocimientos en un lenguaje orientado a objetos con un tipado más fuerte, que al mismo tiempo me da la posibilidad de desarrollar una gran variedad de cosas con mucha flexibilidad.</p>

                </div>
            </div>
        </motion.div>
    </div>)
}
export default AboutInfo