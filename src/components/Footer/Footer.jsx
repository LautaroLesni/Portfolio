import React from "react";
import s from './Footer.module.css'
import { VscMail } from 'react-icons/vsc'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin } from 'react-icons/ai'
import { motion } from "framer-motion";

const Footer = () => {
    return (<motion.footer className={s.footerDIV}
        initial={{opacity: 0}}
        transition={{delay:0, stiffness:0, duration:0.8}}
        whileInView={{ opacity: 1}}
        viewport={{once: true}}>
        <div className={s.contactame}>
            <h2>¿Te gustaría contactarme?</h2>
            </div>
    <ul className={s.iconsDIV}>
        <li><VscMail size={60} style={{color: "rgb(224, 204, 188)"}}/></li>
        <li><GoMarkGithub size={60} style={{color: "rgb(224, 204, 188)"}}/></li>
        <li><AiFillLinkedin size={60} style={{color: "rgb(224, 204, 188)"}}/></li>
    </ul>
        <div className={s.developedby}>
        <h3>Developed & Built by Lautaro Lesniewicz</h3>
        </div>
    </motion.footer>)
}

export default Footer