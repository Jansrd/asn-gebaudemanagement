import React from 'react'
import '../style/Home.css'
import asn_logo_promo from '../images/asn_logo_promo.png'

const Home = () => {
    return (
        <div className="home">
            <div className="home__promo">
                <img src={asn_logo_promo} alt="" />
                <h1>ASN Gebäudemanagement ihr partner und um gebaude und garten.</h1>
            </div>
        </div>
    )
}

export default Home