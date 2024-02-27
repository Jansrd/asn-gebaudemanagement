import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from "react-icons/bi";
import '../style/ScrollToTop.css'

const ScrollToTop = () => {

    const [scrollToTop, setScrollToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="scroll__to__top">
            {scrollToTop && (
                <button onClick={scrollUp}><BiArrowToTop /></button>
            )}
        </div>
    )
}

export default ScrollToTop