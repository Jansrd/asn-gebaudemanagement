import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../style/Home.css'
import asn_logo_promo from '../images/asn_logo_promo.png'
import DeinstleistungenPromo from '../components/DeinstleistungenPromo'
import uterhaltsreinigung from '../images/Unterhaltsreinigung.png'
import grundreinigung from '../images/Grundreinigung.png'
import baureinigung from '../images/Baureinigung.png'
import glasreinigung from '../images/Glasreinigung.png'
import fassadenreinigung from '../images/Fassadenreinigung.png'
import hausemeister from '../images/Hausmeister.png'
import gartenpflege from '../images/Gartenpflege.png'
import sonderreinigung from '../images/Sonderreinigung.png'
import winterdienst from '../images/Winterdienst.png'
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';

const Home = () => {
    const form = useRef()
    const [check, setCheck] = useState(false)

    const send = () => {
        alert("Diese Option ist noch nicht betriebsbereit. Vielen Dank für Ihre Geduld. Kontaktieren Sie uns auf einem anderen Weg.")
    }

    return (
        <div className="home">
            <Header />
            <div className="home__promo">
                <img src={asn_logo_promo} alt="" />
                <h1></h1>
            </div>

            <div className="warum__wir">
                <h1>WARUM WIR?</h1>
                <div className="warum__wir__middle">
                    <h3>Professionalle Reinigungskräfte</h3>
                    <div className="vl"></div>
                    <h3>Umwelbewusste Reinigung</h3>
                    <div className="vl"></div>
                    <h3>Zufriedenheit garantiert</h3>
                </div>
                <div className="warum__wir__bottom">
                    <p>ASN-Gebäudemanagement steht für höchste Standards und erstklassigen Service. Wir sind ein eingetragener
                        Betrieb und setzen auf modernste, umwelt- und materialschonende Reiniger für eine hochwertige Reinigung
                        auf höchstem Niveau. Unser Anspruch an uns selbst ist es, hoch qualitative und verlässliche Gebäudereinigung
                        und Haushaltshilfe zu leisten um Ihren Ansprüchen mehr als zu genügen!</p>
                </div>
            </div>

            <div className="deinstleistungen__home">
                <h1>DEINSTLEISTUNGEN</h1>
                <div className="deinstleistungen__home__content">
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={uterhaltsreinigung}
                            promo_text="Unterhaltsreinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={grundreinigung}
                            promo_text="Grundreinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={baureinigung}
                            promo_text="Baureinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={glasreinigung}
                            promo_text="Glasreinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={fassadenreinigung}
                            promo_text="Fassadenreinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={hausemeister}
                            promo_text="Hausmeister"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={gartenpflege}
                            promo_text="Gartenpflege"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={sonderreinigung}
                            promo_text="Sonderreinigung"
                        />
                    </Link>
                    <Link to="/dienstleistungen">
                        <DeinstleistungenPromo
                            promo_img={winterdienst}
                            promo_text="Winterdienst"
                        />
                    </Link>
                </div>
            </div>

            <div className="kontaktieren__sie__uns">
                <h1>KONTAKTIEREN SIE UNS</h1>
                <div className="kontaktieren__sie__uns__content">
                    <div className="kontaktieren__sie__uns__content__left">
                        <iframe title="map" width="100%" height="305" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=90%25&amp;height=305&amp;hl=en&amp;q=Eckstra%C3%9Fe%207%2089250%20Senden,%20Germany+(ASN%20Geb%C3%A4udemanagement)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                    <div className="kontaktieren__sie__uns__content__right">
                        <form ref={form} className='form' onSubmit={send}>
                            <div className="form__top">
                                <input type='text' placeholder='Name' name='user_name' required />
                                <input type='email' placeholder='E-mail-adresse' name='user_email' required />
                            </div>
                            <div className="form__middle">
                                <textarea type='text' placeholder='Nachricht' name='message' required />
                            </div>
                            <div className="form__bottom">
                                <div className="checkbox">
                                    <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                                    <p>Ich habe die Datenschutzerklärung zur Kenntnis genommen.</p>
                                </div>
                                <button type='submit' className='send__btn'>Absenden</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Home
