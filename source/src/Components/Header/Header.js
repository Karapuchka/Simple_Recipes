import './Header.scss';
import '../../App/mainStyles.scss';

import detect from '../../App/detect.js'
import React, { useState } from 'react';

function Header({setStateModal}) {

    if(detect.mobile()){

        return (
            <div className="header header-mobile">
                
            </div>
        )

    } else {

        return (
            <div className="header header-dekstop">

                <div className="header-dekstop__info">

                    <div className="header-container header-container--stretch container">

                        <div className="header-dekstop__info__item">
    
                            <div className="header-dekstop__info__item__icon-phone"></div>
    
                            <ul className="header-dekstop__info__item__text header-dekstop__info__item__text--list">
    
                                <li className="header-dekstop__info__item__text--list__item"><a className="header-dekstop__info__item__link" href="tel:+79000552545">8 (812) 123-45-67</a></li>
                                <li className="header-dekstop__info__item__text--list__item">Работаем 7 дней в неделю</li>
                                <li className="header-dekstop__info__item__text--list__item">9:00 — 18:00</li>
    
                            </ul>
    
                        </div>
    
                        <div className="header-dekstop__info__item">
    
                            <div className="header-dekstop__info__item__icon-exit js-header-info-btn-login"></div>
    
                            <div className="header-dekstop__info__item__icon-btns header-dekstop__info__item__text js-header-info-btn-login">Войти / Регистрация</div>
    
                        </div>

                    </div>

                </div>
                
                <Nav setStateModal={setStateModal}/>

                <div className="header__offer">

                    <div className="header-container header-container--center header-container--column container">

                        <div className="header__offer__logo">
                            <div className="header__offer__logo__title">porten</div>
                            <div className="header__offer__logo__label">санкт-петербург</div>
                        </div>
    
                        <div className="header__offer__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</div>
                    
                    </div>

                </div>

            </div>
        )
    }
}

function Nav({setStateModal}){

    return (
        <nav className="header-dekstop__nav">

            <div className="header-container header-container--stretch container">

                <div className="header-dekstop__nav__logo header__nav__logo">porten</div>
                
                <ul className="header__nav__menu header-dekstop__nav__menu">
                    
                    <MenuItem text={'Понравилось'}    setStateModal={setStateModal}/>
                    <MenuItem text={'Личный кабинет'} setStateModal={setStateModal}/>
                    <MenuItem text={'Настройки'}      setStateModal={setStateModal}/>

                    <li className="header__nav__menu__item header__nav__menu__item--btns">

                        <div id="header-nav-btn-buy"    className="header__nav__menu__item--btns-btn"></div>
                        <div id="header-nav-btn-search" className="header__nav__menu__item--btns-btn"></div>

                    </li>

                </ul>

            </div>   

        </nav>
    )
}

function MenuItem({text, setStateModal}){

    const [bgItem, setBgItem] = useState(false);

    const onMoveItem = ()=>{
        setBgItem(bgItem => !bgItem);
    }

    return (
        <li onClick={()=>setStateModal()} onPointerOver={()=> onMoveItem()} onPointerOut={()=> onMoveItem()} className={`header__nav__menu__item header-dekstop__nav__menu__item ${bgItem ? 'header__nav__menu__item--active' : ''}`}><a className="header__nav__menu__item__link">{text}</a></li>
    )
}

//Доделать событие наведения, вывести каждый item менюшки в отдельный компонент

export default Header;