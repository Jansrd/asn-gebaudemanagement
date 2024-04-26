import React, { useEffect, useState } from 'react'
import '../style/Header.css'
import asn_logo from '../images/ans_logo.png'
import HeaderContact from './HeaderContact'
import location_pin from '../images/location_pin.png'
import menu from '../images/menu.png'
import call from '../images/call.png'
import clock from '../images/clock.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
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
                    <div className="header__middle__right">
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
                </div>
            </div>
            <div className="header__bottom">
                <ul className='navigation'>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/über-uns">Über uns</Link></li>
                    <li><Link to="/dienstleistungen">Dienstleistungen</Link></li>
                    <li><Link to="/kontaktiere-uns">Kontakt</Link></li>
                </ul>
                {
                    clicked ? <div className="mobile__menu">
                        <ul >
                            <li><Link to="/" onClick={() => setClicked(!clicked)}>Startseite</Link></li>
                            <li><Link to="/über-uns" onClick={() => setClicked(!clicked)}>Über uns</Link></li>
                            <li><Link to="/dienstleistungen" onClick={() => setClicked(!clicked)}>Dienstleistungen</Link></li>
                            <li><Link to="/kontaktiere-uns" onClick={() => setClicked(!clicked)}>Kontakt</Link></li>
                        </ul>
                    </div> :
                        null
                }
                {
                    !clicked ?
                        <GiHamburgerMenu className='menu' onClick={handleClick} />
                        :
                        <IoCloseSharp className='exit__menu' onClick={handleClick} />
                }
            </div>
        </div >
    )
}

export default Header