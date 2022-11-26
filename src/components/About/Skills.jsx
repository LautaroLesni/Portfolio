import React from "react";
import s from './Skills.module.css'
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Skills = () => {
    return (<div className={s.generalDIV}>
        <motion.div className={s.section}
            initial={{ opacity: 0, y: 200 }}
            transition={{ delay: 0, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className={s.whoami}>
                <FiChevronRight size={30} style={{ color: '#847868' }} />
                <h4>Tecnologías que manejo</h4>
                <hr className={s.barra} />
            </div>
            <ul className={s.skillscontainer}>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className={s.skillimg} /><FiChevronRight size={20} />HTML </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className={s.skillimg} /><FiChevronRight />CSS </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className={s.skillimg} /><FiChevronRight />JavaScript</div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" className={s.skillimg} /><FiChevronRight />TypeScript</div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className={s.skillimg} /><FiChevronRight />React </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className={s.skillimg} /><FiChevronRight />Redux </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className={s.skillimg} /><FiChevronRight />Node.js </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" className={s.skillimg} /><FiChevronRight />Express.js </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className={s.skillimg} /><FiChevronRight />MySQL </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className={s.skillimg} /><FiChevronRight />PostgresSQL </div></li>
                <li><div className={s.whoami}><img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" className={s.skillimg} /><FiChevronRight />NextJS </div></li>
                <li><div className={s.whoami}><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" className={s.skillimg} /><FiChevronRight />Postman </div></li>
            </ul>
        </motion.div>

        <motion.div className={s.section}
            initial={{ opacity: 0, y: 200 }}
            transition={{ delay: 0, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className={s.whoami}>
                <FiChevronRight size={30} style={{ color: '#847868' }} />
                <h4>Tecnologías que estoy aprendiendo</h4>
                <hr className={s.barra} />
            </div>
            <ul className={s.skillscontainertwo}>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" className={s.skillimg} /><FiChevronRight size={20} />.NET </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" className={s.skillimg} /><FiChevronRight />C# </div></li>
                <li><div className={s.whoami}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" className={s.skillimg} /><FiChevronRight />Java </div></li>
            </ul>
        </motion.div>
    </div>)
}

export default Skills