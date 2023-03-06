//Mobile versoin
import './Header.css';
import Menu from '../../menu/Menu.js';

function Header(){
    return (
        <header className="header">
            
            <div className="header__item header__item--offer">

            </div>

            <div className="header__item header__item--nav">
                <Menu />
            </div>

        </header>
    )
}

export default Header;