//Mobile versoin

import './Header.css';

import React, { useState } from 'react';
import Menu from '../../menu/Menu.js';
import Offer from '../../headerOffer/HeaderOffer.js';

function Header(){

    return (
        <header className="header">
            
            <div className="header__offer__btn-active-menu">
                <span className="header__offer__btn-active-menu__line-left"></span>
                <span className="header__offer__btn-active-menu__line-right"></span>
            </div>

            <div className="header__item header__item--nav">
                <Menu />
            </div>

            <div className="header__item header__item--offer">
                <Offer />
            </div>

        </header>
    )
}

export default Header;