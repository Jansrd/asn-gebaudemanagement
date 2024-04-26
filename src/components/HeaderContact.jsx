import React from 'react'
import '../style/HeaderContact.css'

const HeaderContact = ({ icon, text1, text2, text3, color }) => {
    return (
        <div className="header__contact">
            <div className="header__contact__left">
                <img src={icon} alt="" />
            </div>
            <div className="header__contact__right">
                <h3>{text1}</h3>
                <p style={{ color: color }}>{text2}</p>
                <p id='sonntag'>{text3}</p>
            </div>
        </div>
    )
}

export default HeaderContact