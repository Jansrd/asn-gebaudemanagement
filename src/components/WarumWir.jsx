import React from 'react'
import '../style/WarumWir.css'

const WarumWir = ({ icon, text }) => {
    return (
        <div className="warum__wir__component">
            <div className="warum__wir__component__top">
                <div id='circle' className="circle">
                    <img src={icon} alt='' />
                </div>
            </div>
            <div id='wwcb__text' className="warum__wir__component__bottom">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default WarumWir