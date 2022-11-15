import React from "react";
import { motion } from "framer-motion";
import s from './ProjectCards.module.css'
import githubicon from '../../assets/github.png'
import linkicon from '../../assets/link.png'


const ProjectCards = ({name, img, description, github, deploy, technologies}) =>{
    return (
        <motion.div className={s.projectCardDIV}
        initial={{ opacity: 0, y: 200 }}
        transition={{ delay: 0, duration:1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
            <img className={s.projectIMG} src={img} alt={name}/>
            <h2>{name}</h2>
            <div className={s.projectBody}>
                <ul>
                    {technologies?.map(tech=>
                    <li>{tech}</li>)}
                </ul>
                <p>{description}</p>
                <div className={s.projecticonsDIV}>
                <a href={github} target='_blank' rel="noreferrer noopener"><img className={s.projecticons} src={githubicon} alt="github" /></a>
                <a href={deploy} target='_blank' rel="noreferrer noopener"><img className={s.projecticons} src={linkicon} alt='link'/></a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCards