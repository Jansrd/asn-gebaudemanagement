import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const HeaderKontakt = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div className="header__kontakt">
            <div className="header__top">
                <p></p>
            </div>
            <div className="header__bottom">
                <ul className='navigation'>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/über-uns">Über uns</Link></li>
                    <li><Link to="/dienstleistungen">Dienstleistungen</Link></li>
                    <li><Link to="/kontaktiere-uns">Kontaktiere uns</Link></li>
                </ul>
                {
                    clicked ? <div className="mobile__menu">
                        <ul >
                            <li><Link to="/" onClick={() => setClicked(!clicked)}>Startseite</Link></li>
                            <li><Link to="/über-uns" onClick={() => setClicked(!clicked)}>Über uns</Link></li>
                            <li><Link to="/dienstleistungen" onClick={() => setClicked(!clicked)}>Dienstleistungen</Link></li>
                            <li><Link to="/kontaktiere-uns" onClick={() => setClicked(!clicked)}>Kontaktiere uns</Link></li>
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
        </div>
    )
}

export default HeaderKontakt