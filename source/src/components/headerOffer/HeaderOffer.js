import './headerOffer.css'

import detect from '../../detect.js'

function HeaderOffer(){

    return (

        <div className="hadeer__offer">

            <div className="header__container">

                <div className="header__offer__logo">
    
                    <div className="header__offer__logo__text">
                        <p className="header__offer__logo__text__title">PORTEN</p>
                        <p className="header__offer__logo__text__subtitle">санкт-петербург</p>
                    </div>
    
                </div>

                {(detect.mobile()) ?  <p className="header__offer__description"  style={{width: 320}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                </p> :  <p className="header__offer__description"  style={{width: 720}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                </p>}
    
               

            </div>

        </div>

    )
}

export default HeaderOffer;