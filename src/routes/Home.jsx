import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Home/Intro'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro/>
            <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
                Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        </div>
    )
}

export default Home