import React from 'react'
import '../style/DeinstleistungenCard.css'

const DeinstleistungenCard = ({ icon, text, description }) => {
    return (
        <div className="deinstleistungen__card">
            <div className="deinstleistungen__card__component__top">
                <div className="rectangle">
                    <img src={icon} alt='' />
                </div>
            </div>
            <div className="deinstleistungen__card__component__bottom">
                <h3>{text}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DeinstleistungenCard