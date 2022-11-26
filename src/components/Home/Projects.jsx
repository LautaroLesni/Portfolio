import React from "react";
import s from './Projects.module.css'
import { motion } from "framer-motion";
import { projectsdb } from "../projectsdb";
import ProjectCards from "./ProjectCards";

const Projects = () => {
    return (
        <div className={s.projectsDIV}>
            <motion.div className="knowmeDIV"
                initial={{ opacity: 0, y: 200 }}
                transition={{ delay: 0, duration:0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <hr className="barra" />
                <motion.h4 className="knowme">
                    Projects</motion.h4>
                <hr className="barra" />
            </motion.div>
        <div className={s.alignproyects}>
            <div className={s.projectscardsDIV}>
            {projectsdb?.map(project => (
            <ProjectCards
            key={project.deploy}
            name={project.name}
            img={project.img}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
            technologies={project.technologies} />
            ))}
            </div>
        </div>
        </div>
    )
}

export default Projects