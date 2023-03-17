import './modalWindow.scss';

import detect from '../../App/detect.js'
import { useState } from 'react';

function ModalWindow({stateModal, setStateModal}){

    const [modalOpacity, setModalOpacity] = useState('modal-window--open');

    const onChangeBtnExit = ()=>{

        setModalOpacity(modalOpacity => 'modal-window--close');

        setTimeout(()=>{

            setModalOpacity(modalOpacity => '');

            setStateModal();

            console.log(stateModal);

        }, 1500);
        
    }

    if(detect.mobile()){

        return (
            <div className="modal-window">

                <div className="modal-window__container">

                    <div className="modal-window__title">porten</div>
                    <div className="modal-window__description">Страница не доступна</div>

                </div>

            </div>
        )

    } else {

        return (
            <div className={`modal-window ${stateModal ? `${modalOpacity == '' ? 'modal-window--open': 'modal-window--close'}` : ''}`}>

                <div className="modal-window__container">

                    <div onClick={()=> onChangeBtnExit()} className="modal-window__btn-exit"></div>

                    <div className="modal-window__title">porten</div>
                    <div className="modal-window__line"></div>
                    <div className="modal-window__description">Страница не доступна</div>

                </div>

            </div>
        )
    }
}

export default ModalWindow;