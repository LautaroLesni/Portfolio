import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Home/Intro'
import { Oval } from 'react-loader-spinner'
import { useState, useEffect } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        },3000)
    }, [])

    return (
        <div>
            {loading ? <div className="loading"><Oval
                height={150}
                width={150}
                color="#cd7d05"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#f78604"
                strokeWidth={2}
                strokeWidthSecondary={2}
            /></div>
        :  <div>
        <Navbar />
        <Intro />
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
        <h3>Si estas leyendo esto es porque mi portfolio esta en proceso.
            Dentro de muy poco voy a tenerlo listo para que lo veas!</h3>
            </div>}

        </div>

    )
}

export default Home