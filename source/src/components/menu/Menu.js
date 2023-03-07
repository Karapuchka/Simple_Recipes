import './Menu.css';

import Category from '../category/Category.js';

function Menu(){
    return (

        <nav className="nav">

            <div className="nav__logo">
                <p className="nav__logo__text">PORTEN</p>
            </div>

            <div className="nav__btns">

                <ul className="nav__list">
                    <li className="nav__list__item"><a href="#" className="nav__list__item__link">Понравилось</a></li>
                    <li className="nav__list__item"><a href="#" className="nav__list__item__link">личный кабинет</a></li>
                    <li className="nav__list__item"><a href="#" className="nav__list__item__link">настройки</a></li>
                </ul>
    
                {/* Кнопки корзина и поиск */}
                <div className="nav__btns__active">
                    <div className='nav__btns__active__icon' id="nav-btn-basket"></div>
                    <div className='nav__btns__active__icon' id="nav-btn-search"></div>
                </div>

            </div>

            <div className='nav__category'><Category /></div>
            
        </nav>

    )
}

export default Menu;