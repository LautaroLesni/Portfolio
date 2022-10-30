import React from "react";
import lautaroimg from '../../assets/Lautaro1.png'
import { Link } from "react-router-dom";
import './Intro.css'

const Intro = () => {
    return (<div className="hero">
    <div className="lautaroimgdiv">
        <img src={lautaroimg} alt='Lautaro' className="lautaroimg"></img>
    </div>
    <div className="content">
        <p>I'm Lautaro Lesniewicz</p>
        <h1>Fullstack Developer</h1>
        <div className="buttons">
            <Link to='/about' className="button-62">Conoceme</Link>
        </div>
    </div>
</div>)
}

export default Intro