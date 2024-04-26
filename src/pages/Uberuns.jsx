import React from 'react'
import '../style/Uberuns.css'
import WarumWir from '../components/WarumWir'
import professionelle from '../images/professionelle.png'
import umweltbewusste from '../images/umweltbewusste.png'
import garantiert from '../images/garantiert.png'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const Uberuns = () => {
    return (
        <div className="uber__uns">
            <Header />
            <div className="uber__uns__content">
                <div className="uber__uns__content__top">
                    <h1>WARUM WIR?</h1>
                </div>
                <div className="uber__uns__content__middle">
                    <p id='uber__uns__text'>ASN-Gebäudemanagement steht für höchste Standards und erstklassigen Service. Wir sind ein eingetragener Betrieb und setzen auf modernste,
                        umwelt- und materialschonende Reiniger für eine hochwertige Reinigung auf höchstem Niveau. Unser Anspruch an uns selbst ist es, hoch qualitative und
                        verlässliche Gebäudereinigung und Haushaltshilfe zu leisten um Ihren Ansprüchen mehr als zu genügen! Wir sind stolz sagen zu können, dass wir unsere Kunden in Ulm
                        oder darüber hinaus immer überzeugen können. Deshalb wollen wir uns immer wieder neue Maßstäbe setzen um die Gebäudeunterhaltung noch effektiver gestalten zu können.</p>
                </div>
                <div className="uber__uns__content__bottom">
                    <WarumWir
                        shape="circle"
                        icon={professionelle}
                        text="Professionelle Reinigungskräfte"
                    />
                    <WarumWir
                        shape="circle"
                        icon={umweltbewusste}
                        text="Umweltbewusste
                        Reinigung"
                    />
                    <WarumWir
                        shape="circle"
                        icon={garantiert}
                        text="Zufriedenheit
                        garantiert"
                    />
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Uberuns