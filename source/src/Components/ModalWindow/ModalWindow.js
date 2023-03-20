import './modalWindow.scss';

import { useState } from 'react';

function ModalWindow({stateModal, setStateModal}){

    const [modalOpacity, setModalOpacity] = useState('');

    const onChangeBtnExit = ()=>{

        setModalOpacity(modalOpacity => 'modal-window--close');

        setTimeout(()=>{

            setModalOpacity(modalOpacity => '');

            setStateModal();

        }, 1500);
        
    }

    return (
        <div className={`modal-window ${stateModal ? `${modalOpacity === '' ? 'modal-window--open': 'modal-window--close'}` : ''}`}>

            <div className="modal-window__container">

                <div onClick={()=> onChangeBtnExit()} className="modal-window__btn-exit"></div>

                <div className="modal-window__title">porten</div>
                <div className="modal-window__line"></div>
                <div className="modal-window__description">Страница не доступна</div>

            </div>

        </div>
    )
}

export default ModalWindow;