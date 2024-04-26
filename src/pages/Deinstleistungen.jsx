import React from 'react'
import '../style/Deinstleistungen.css'
import DeinstleistungenCard from '../components/DeinstleistungenCard'
import unterhaltsreinigung_icon from '../images/Unterhaltsreinigung_Icon.png'
import grundreinigung_icon from '../images/Grundreinigung_Icon.png'
import baureinigung_icon from '../images/Baureinigung_Icon.png'
import glasreinigung_icon from '../images/Glasreinigung_Icon.png'
import fassadenreinigung_icon from '../images/Fassadenreinigung_Icon.png'
import sonderreinigung_icon from '../images/Sonderreinigung_Icon.png'
import gartenpflege_icon from '../images/Gartenpflege_Icon.png'
import hausmeister_icon from '../images/Hausmeister_Icon.png'
import winterdienst_icon from '../images/Winterdienst_Icon.png'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const Deinstleistungen = () => {
    return (
        <div className="deinstleistungen">
            <Header />
            <div className="deinstleistungen__content">
                <div className="deinstleistungen__content__top">
                    <h1>DIENSTLEISTUNGEN</h1>
                </div>
                <div id='dcb' className="deinstleistungen__content__bottom">
                    <DeinstleistungenCard
                        icon={unterhaltsreinigung_icon}
                        text="Unterhaltsreinigung"
                        description="Ob Privatobjekt oder Gewerbe unsere
                        Unterhaltsreinigung sorgt dafÜr, dass die 
                        Innenflachen immer sauber sind."
                    />
                    <DeinstleistungenCard
                        icon={grundreinigung_icon}
                        text="Grundreinigung"
                        description="Die Grundreinigung beginnt am  Ende der allgemeinen
                        Unterhaltsreinigung. Hier entfernen wir hartnackige
                        Verschmutzungen und erneuern den Aushärtefilm für 
                        Ihre Bodenbeläge."
                    />
                    <DeinstleistungenCard
                        icon={baureinigung_icon}
                        text="Baureinigung"
                        description="Wir unterstützen Neubauprojekte und 
                        Renovierungsarbeiten durch die Reinigung 
                        Ihres Objektes."
                    />
                    <DeinstleistungenCard
                        icon={glasreinigung_icon}
                        text="Glasreinigung"
                        description="Unser professionelles Team ist geschult und ausgerüstet, 
                        um alle Fensterkonstruktionen zuverlässig zu reinigen. 
                        Mit oder ohne Aufstiegshilfen, doppelt oder vierfach verglaste 
                        Fenster, Deckenleuchten oder Glasdächer – wir garantieren
                        freie Sicht."
                    />
                    <DeinstleistungenCard
                        icon={fassadenreinigung_icon}
                        text="Fassadenreinigung"
                        description="Eine Fassade ist die Visitenkarte einer Immobilie.
                        Zahlreiche Umwelteinflüsse wie Regen, Sonne, Staub oder 
                        Schmutz aus dem Straßenverkehr hinterlassen ihre Spuren. 
                        Mit unserer Fassadenreinigung zeigen sich Fassaden wieder
                        von ihrer besten Seite."
                    />
                    <DeinstleistungenCard
                        icon={sonderreinigung_icon}
                        text="Sonderreinigung"
                        description="Zur Sonderreinigung gehört alles, was über
                        die normale Reinigung hinausgeht – dazu 
                        gehören besonders hartnäckige Verschmutzungen,
                        schwer zugängliche Stellen und ein deutlich erhöhter
                        Arbeitsaufwand."
                    />
                    <DeinstleistungenCard
                        icon={gartenpflege_icon}
                        text="Gartenpflege"
                        description="Wir bieten eine breite Palette von Gartenpflege-Leistungen an,
                        die von professionellen Gärtnern sorgfältig ausgeführt werden,
                        um sicherzustellen, dass Ihr Garten immer gut aussieht."
                    />
                    <DeinstleistungenCard
                        icon={hausmeister_icon}
                        text="Hausmeister"
                        description="Sie profitieren von einem persönlichen Betreuungsservice,
                        der sich um die Pflege, Wartung und Kontrolle Ihrer Immobilie
                        kümmert."
                    />
                    <DeinstleistungenCard
                        icon={winterdienst_icon}
                        text="Winterdienst"
                        description="Unser Winterdienst ist 24 Stunden am Tag, 7 Tage
                        die Woche immer für Sie da und sorgt für Verkehrssicherheit."
                    />
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Deinstleistungen