import './Header.scss';
import '../../App/mainStyles.scss';

import detect from '../../App/detect.js'
import React, { useState } from 'react';

function Header({setStateModal}) {

    const [burgerBtn, setBurgerBtn] = useState(false);

    const burgerActive = ()=>{
        setBurgerBtn(burgerBtn => !burgerBtn);
    }

    if(detect.mobile()){

        return (
            <div className="header header-mobile">

                <div className="header-container header-mobile-container container">

                    <div onPointerDown={()=> burgerActive()} className={`header-mobile__burger-btn ${burgerBtn ? 'header-mobile__burger-btn--active' : 'header-mobile__burger-btn--close'}`}></div>
                   
                </div>

                <div className="header-mobile__burger-menu">

                    <div className="header__logo__title">porten</div>

                    <Nav setStateModal={setStateModal} device='mobile'/>

                    <div className="header-mobile__info">

                        <ul className="header-mobile__info__list">

                            <li className="header-mobile__info__list__item"><a className="header-mobile__info__list__item__link" href="tel:+79000000000">8 (812) 123-45-67</a></li>
                            <li className="header-mobile__info__list__item">Работаем 7 дней в неделю</li>
                            <li className="header-mobile__info__list__item">9:00 — 18:00</li>

                        </ul>

                        <LoginBtn setStateModal={setStateModal} device={'mobile'}/>

                    </div>

                </div>

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
    
                                <li className="header-dekstop__info__item__text--list__item"><a className="header-dekstop__info__item__link" href="tel:+79000000000">8 (812) 123-45-67</a></li>
                                <li className="header-dekstop__info__item__text--list__item">Работаем 7 дней в неделю</li>
                                <li className="header-dekstop__info__item__text--list__item">9:00 — 18:00</li>
    
                            </ul>
    
                        </div>
    
                        <LoginBtn setStateModal={setStateModal} device={'dekstop'}/>

                    </div>

                </div>
                
                <Nav setStateModal={setStateModal} device='dekstop'/>

                <div className="header__offer">

                    <div className="header-container header-container--center header-container--column container">

                        <div className="header__logo">
                            <div className="header__logo__title">porten</div>
                            <div className="header__logo__label">санкт-петербург</div>
                        </div>
    
                        <div className="header__offer__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</div>
                    
                    </div>

                </div>

            </div>
        )
    }
}

function Nav({setStateModal, device}){

    if(device === 'dekstop'){

        return (

            <nav className={`header-${device}__nav`}>
    
                <div className="header-container header-container--stretch container">
    
                    <div className={`header-${device}__nav__logo header__nav__logo`}>porten</div>
                    
                    <ul className={`header__nav__menu header-${device}__nav__menu`}>
                        
                        <MenuItem text={'Понравилось'}    setStateModal={setStateModal} device={device}/>
                        <MenuItem text={'Личный кабинет'} setStateModal={setStateModal} device={device}/>
                        <MenuItem text={'Настройки'}      setStateModal={setStateModal} device={device}/>
    
                        <li className="header__nav__menu__item header__nav__menu__item--btns">
    
                            <BtnMenu id={"header-nav-btn-buy"}    setStateModal={setStateModal}/>
                            <BtnMenu id={"header-nav-btn-search"} setStateModal={setStateModal}/>
    
                        </li>
    
                    </ul>
    
                </div>   
    
            </nav>
        )

    } else {

        return (
            
            <nav className={`header-${device}__nav`}>
    
                <div className={`header-container header-${device}-container header-container--stretch container`}>
                        
                    <ul className={`header__nav__menu header-${device}__nav__menu`}>
                        
                        <MenuItem text={'Понравилось'}    setStateModal={setStateModal} device={device}/>
                        <MenuItem text={'Личный кабинет'} setStateModal={setStateModal} device={device}/>
                        <MenuItem text={'Настройки'}      setStateModal={setStateModal} device={device}/>
    
                        <li className={`header__nav__menu__item header-${device}__nav__menu__item--btns header__nav__menu__item--btns`}>
    
                            <BtnMenu id={"header-nav-btn-buy"} setStateModal={setStateModal}/>
                            <BtnMenu id={"header-nav-btn-search"} setStateModal={setStateModal}/>
    
                        </li>
    
                    </ul>
    
                </div>   
    
            </nav>
        )
    }
}

function MenuItem({text, setStateModal, device}){

    const [bgItem, setBgItem] = useState(false);

    const onMoveItem = ()=>{
        setBgItem(bgItem => !bgItem);
    }

    return (
        <li onClick={()=>setStateModal()} onPointerOver={()=> onMoveItem()} onPointerOut={()=> onMoveItem()} className={`header__nav__menu__item header-${device}__nav__menu__item ${bgItem ? 'header__nav__menu__item--active' : ''}`}><a className="header__nav__menu__item__link">{text}</a></li>
    )
}

function BtnMenu({id, setStateModal}){
    return(
        <div onClick={()=> setStateModal()} id={id} className="header__nav__menu__item--btns-btn"></div>
    )
}

function LoginBtn({setStateModal, device}){
    return (
        <div onClick={()=> setStateModal()} className="header-dekstop__info__item">
    
            <div className={`header-${device}__info__item__icon-exit js-header-info-btn-login`}></div>
            
            <div className={`header-${device}__info__item__icon-btns header-${device}__info__item__text js-header-info-btn-login`}>Войти / Регистрация</div>             
    
        </div>
    )
}

export default Header;