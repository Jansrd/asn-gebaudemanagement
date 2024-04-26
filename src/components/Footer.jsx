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
                        <h1>Dienstleistungen</h1>
                        <div className="hl"></div>
                        <ul>
                            <li><Link to="/dienstleistungen">Unterhaltsreinigung</Link></li>
                            <li><Link to="/dienstleistungen">Grundreinigung</Link></li>
                            <li><Link to="/dienstleistungen">Baureinigung</Link></li>
                            <li><Link to="/dienstleistungen">Glasreinigung</Link></li>
                            <li><Link to="/dienstleistungen">Fassadenreinigung</Link></li>
                            <li><Link to="/dienstleistungen">Hausemeister</Link></li>
                            <li><Link to="/dienstleistungen">Gartenpflege</Link></li>
                            <li><Link to="/dienstleistungen">Sonderreinigung</Link></li>
                            <li><Link to="/dienstleistungen">Winterdienst</Link></li>
                        </ul>
                    </div>
                    <div className="footer__right">
                        <h1>Kontakt</h1>
                        <div className="hl"></div>
                        <div className="footer__right__content">
                            <HeaderContact
                                icon={location_pin}
                                text1="ASN Gebäudemanagement,"
                                text2="Eckstraße 7 89250 Senden"
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
                            <h4>Kontaktieren Sie uns und wir werden uns bald bei Ihnen melden.</h4>
                            <div className="footer__end__right">
                                {/* href="link" target="_blank" */}
                                <a><img src={facebook} alt="" /></a>
                                <a href='https://www.instagram.com/asn_gebaeudemanagement/' target='_blank'><img src={instagram} alt="" /></a>
                                <a><img src={linekdin} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer__end' className="footer__end">
                <div className="footer__end__top">
                    <Link to="/impressum" target='_blank'>Impressum</Link>
                    <Link to='/datenschutzerklärung' target='_blank'>Datenschutzerklärung</Link>
                </div>
                <div className="footer__end__bottom">
                    <p>Copyright&copy; 2024 ASN Gebäudemanagement.</p>
                </div>

            </div>
        </>
    )
}

export default Footer