import React from "react";
import s from './Projects.module.css'
import { motion } from "framer-motion";
import { projectsdb } from '../projectsdb'
import divider from '../../assets/divider3.png'
import githubicon from '../../assets/github.png'
import linkicon from '../../assets/link.png'

const Projects = () => {
    return (
        <div className={s.generalDIV}>
            <motion.div className={s.projectswelcome}
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: 0, duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <h1>Projects</h1>
            </motion.div>

            <motion.div className={s.outterprojectsDIV}
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: 0, duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                {projectsdb.map(project => (
                    <motion.div>
                        <div key={project.name} className={s.projectDIV}>
                            <div className={project.side === 'left' ? s.projectimgDIV : s.projectimgDIVright}>
                                <img src={project.img} alt={project.name} />
                            </div>
                            <div className={project.side === 'left' ? s.projectinfoDIV : s.projectinfoDIVright}>
                                <h2>{project.name}</h2>
                                <img src={divider} alt='divider' />
                                <ul>
                                    {project.alltechnologies.map(techs => (
                                        <li key={techs}>{techs}</li>
                                    ))}
                                </ul>
                                <p>{project.longdescription}</p>
                                <div className={s.projecticonsDIV}>
                                    <a href={project.github} target='_blank' rel="noreferrer noopener"><img className={s.projecticons} src={githubicon} alt="github" /></a>
                                    <a href={project.deploy} target='_blank' rel="noreferrer noopener"><img className={s.projecticons} src={linkicon} alt='link' /></a>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects