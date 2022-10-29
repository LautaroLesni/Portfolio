import React from "react";
import Navbar from '../components/Navbar/Navbar'
import lautaroimg from '../assets/Lautaro1.png'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="hero">
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
            </div>
            <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
                Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        </div>
    )
}

export default Home