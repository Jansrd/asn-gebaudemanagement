import React from 'react'
import '../style/Header.css'
import asn_logo from '../images/ans_logo.png'
import HeaderContact from './HeaderContact'
import location_pin from '../images/location_pin.png'
import call from '../images/call.png'
import clock from '../images/clock.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <div className="header__top">
                <p></p>
            </div>
            <div className="header__middle">
                <div className="header__middle__content">
                    <div className="header__middle__left">
                        <img src={asn_logo} alt="" />
                    </div>
                    <div className="headaer__middle__right">
                        <HeaderContact
                            icon={location_pin}
                            text1="ASN Gebäudemanagement,"
                            text2="Eckstrßa 7 89250 Senden"
                        />
                        <HeaderContact
                            icon={call}
                            text1="+49 17684560147"
                            text2="info@asn-ulm.de"
                        />
                        <HeaderContact
                            icon={clock}
                            text1="Mon - Sam 8.00 - 17.00 Uhr"
                            text3="Sonntag GESCHLOSSEN"
                        />
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <ul className='navigation'>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/über-uns">Über uns</Link></li>
                    <li><Link to="/dienstleistungen">Dienstleistungen</Link></li>
                    <li><Link to="/kontaktiere-uns">Kontaktiere uns</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header