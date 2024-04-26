import React from 'react'
import HeaderKontakt from '../components/HeaderKontakt'
import HeaderContact from '../components/HeaderContact'
import location_pin from '../images/location_pin.png'
import call from '../images/call.png'
import clock from '../images/clock.png'
import '../style/Kontaktiereuns.css'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const Kontaktiereuns = () => {
    return (
        <div className="kontaktiereuns">
            <HeaderKontakt />
            <div id='kon' className="kontaktiereuns__content">
                <div id='ko' className="kontakt">
                    <HeaderContact
                        icon={location_pin}
                        text1="ASN Gebäudemanagement,"
                        text2="Eckstraße 7 89250 Senden"
                    />
                    <HeaderContact
                        icon={call}
                        text1="+49 17684560147"
                        text2="info@asn-ulm.de"
                    />
                    <HeaderContact
                        icon={clock}
                        text1="Mo - Sa 8.00 - 17.00 Uhr"
                        text3="Sonntag GESCHLOSSEN"
                    />
                </div>
                <h4>Kontaktieren Sie uns und wir werden uns bald bei Ihnen melden.</h4>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Kontaktiereuns