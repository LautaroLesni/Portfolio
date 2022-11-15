import React from "react";
import Navbar from '../components/Navbar/Navbar'
import underconstruction from '../assets/underconstruction2.png'

const About = () =>{
    return (
        <div>
            <Navbar />
            <div className="enconstruccionDIV">
            <img src={underconstruction} alt='underconstruction'/>
            </div>
        </div>
    )
}

export default About