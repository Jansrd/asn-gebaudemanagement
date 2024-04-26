import React from 'react'
import '../style/ImpressumContent.css'

const ImpressumContent = ({ title, content }) => {
    return (
        <div className="impressum__component">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}

export default ImpressumContent