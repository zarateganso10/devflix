import React from 'react';
import Logo from './../../assets/logo.png';

import Button from '../Button'

import './style.css';

export default function Header() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Devflix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}