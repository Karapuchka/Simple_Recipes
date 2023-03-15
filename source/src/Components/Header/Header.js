import './Header.scss';
import '../../App/mainStyles.scss';

import detect from '../../App/detect.js'

function Header() {

    if(detect.mobile()){

        return (
            <div className="header header-mobile">
                
            </div>
        )

    } else {

        return (
            <div className="header header-dekstop">

                <div className="header-dekstop__info">

                    <div className="header-dekstop__info__content container">

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

                <nav className="header-dekstop__nav">

                    <div className="header-dekstop__nav__logo">

                    </div>

                </nav>

            </div>
        )

    }


}

export default Header;
