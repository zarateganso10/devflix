import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/logo.png';

import Button from '../Button'

import './style.css';

export default function Header() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Devflix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
}