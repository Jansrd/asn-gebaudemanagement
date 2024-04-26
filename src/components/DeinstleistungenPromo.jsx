import React from 'react'
import '../style/DeinstleistungenPromo.css'

const DeinstleistungenPromo = ({ promo_img, promo_text }) => {
    return (
        <div className="deinstleistungen__promo">
            <img src={promo_img} alt="" />
            <h2>{promo_text}</h2>
        </div>
    )
}

export default DeinstleistungenPromo