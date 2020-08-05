import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from "../Button"

// import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da HappyFlix" />
            </a>
            
            <Button as="a" href="/">
                + NOVO VÍDEO
            </Button>
        </nav>
    )   
}

export default Menu