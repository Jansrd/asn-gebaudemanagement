import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-router-dom'
import HeaderContact from './HeaderContact'
import location_pin from '../images/location_pin_footer.png'
import call from '../images/call_footer.png'
import clock from '../images/clock_footer.png'
import facebook from '../images/facebook.png'
import instagram from '../images/insta.png'
import linekdin from '../images/linkedin.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div id='fc' className="footer__content">
                    <div className="footer__left">
                        <h1>Über uns</h1>
                        <div className="hl"></div>
                        <p id='footer__left__text'>ASN-Gebäudemanagement steht für höchste Standards
                            und erstklassigen Service. Wir sind ein eingetragener
                            Betrieb und setzen auf modernste, umwelt- und
                            materialschonende Reiniger für eine hochwertige
                            Reinigung auf höchstem Niveau.</p>
                    </div>
                    <div className="footer__center">
                        <h1>Deinstleistungen</h1>
                        <div className="hl"></div>
                        <ul>
                            <li><Link>Unterhaltsreinigung</Link></li>
                            <li><Link>Grundreinigung</Link></li>
                            <li><Link>Baureinigung</Link></li>
                            <li><Link>Glasreinigung</Link></li>
                            <li><Link>Fassadenreinigung</Link></li>
                            <li><Link>Gartenpflege</Link></li>
                            <li><Link>Sonderreinigung</Link></li>
                            <li><Link>Winterdienst</Link></li>
                        </ul>
                    </div>
                    <div className="footer__right">
                        <h1>Kontakt</h1>
                        <div className="hl"></div>
                        <div className="footer__right__content">
                            <HeaderContact
                                icon={location_pin}
                                text1="ASN Gebäudemanagement,"
                                text2="Eckstrßa 7 89250 Senden"
                                color="rgb(255, 255, 255)"
                            />
                            <HeaderContact
                                icon={call}
                                text1="+49 17684560147"
                                text2="info@asn-ulm.de"
                                color="rgb(255, 255, 255)"
                            />
                            <HeaderContact
                                icon={clock}
                                text1="Mon - Sam 8.00 - 17.00 Uhr"
                                text2="Sonntag GESCHLOSSEN"
                                color="rgb(255, 255, 255)"
                            />
                            <h4>Senden Sie uns eine E-Mail und wir werden uns in Kürze
                                bei Ihnen melden.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer__end' className="footer__end">
                <div className="footer__end__left">
                    <p>Copyright&copy; 2024 ASN Gebäudemanagement.<a>All rights reserved.</a></p>
                </div>
                <div className="footer__end__right">
                    {/* href="link" target="_blank" */}
                    <a><img src={facebook} alt="" /></a>
                    <a><img src={instagram} alt="" /></a>
                    <a><img src={linekdin} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Footer