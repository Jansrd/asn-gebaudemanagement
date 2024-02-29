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
import gartenpflege from '../images/Gartenpflege.png'
import sonderreinigung from '../images/Sonderreinigung.png'
import winterdienst from '../images/Winterdienst.png'
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    const form = useRef()
    const [check, setCheck] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        if (check === true) {
            emailjs
                .sendForm('service_djnct5u', 'template_jf8pbap', form.current, {
                    publicKey: 'svqmM3udu8CHs6oxD',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            e.target.reset()
            alert("Nachricht wurde gesendet")
        } else {
            alert("Pin Ich habe die Datenschutzerklärung gelesen und werde es erneut versuchen! Danke schön.")
        }
        setCheck(false)
    };

    return (
        <div className="home">
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

            <div className="deinstleistungen">
                <h1>DEINSTLEISTINGEN</h1>
                <div className="deinstleistungen__content">
                    <DeinstleistungenPromo
                        promo_img={uterhaltsreinigung}
                        promo_text="Unterhaltsreinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={grundreinigung}
                        promo_text="Grindreinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={baureinigung}
                        promo_text="Baureinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={glasreinigung}
                        promo_text="Glasreinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={fassadenreinigung}
                        promo_text="Fassadenreinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={gartenpflege}
                        promo_text="Gartenpflege"
                    />
                    <DeinstleistungenPromo
                        promo_img={sonderreinigung}
                        promo_text="Sonderreinigung"
                    />
                    <DeinstleistungenPromo
                        promo_img={winterdienst}
                        promo_text="Winterdienst"
                    />
                </div>
            </div>

            <div className="kontaktieren__sie__uns">
                <h1>KONTAKTIEREN SIE UNS</h1>
                <div className="kontaktieren__sie__uns__content">
                    <div className="kontaktieren__sie__uns__content__left">
                        <iframe title='maps' width="90%" height="305" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Eckstr%C3%9Fa%207%2089250%20Senden+(ASN%20Gebaudemanagement)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                    </div>
                    <div className="kontaktieren__sie__uns__content__right">
                        <form ref={form} className='form' onSubmit={sendEmail}>
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
                                    <p>Ich habe die datenschutzerklarung zur kenntnis genommen.</p>
                                </div>
                                <button type='submit' className='send__btn'>Absenden</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Home


