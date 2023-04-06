import { useState, useEffect } from 'react';

import './ModalWindow.scss';

function ModalWindow({title, description, typeModal, activeModal, stateModal}){

    const [display, setDisplay] = useState('none');
    const [classModal, setClassModal] = useState('modal--close');

    useEffect(()=> {

        if(stateModal){

            document.title = 'Active modal (⌐■_■)';

            setDisplay(display => 'flex');

            setClassModal(classModal => 'modal--active');

        } else {

            document.title = 'Test useEffect';

            setClassModal(classModal => 'modal--close');

            setTimeout(()=>{

                setDisplay(display => 'none');

            }, 800)
        }

    }, [stateModal])

    return (
        <div className={`modal ${classModal}`} style={{display: `${display}`}}>

            <div className='modal__btn-exit' onClick={()=> activeModal()}></div>

            <h3 className='modal-title'>{title}</h3>

            <p className='modal-description'>{description}</p>

            {typeModal ? <ModalBtn type={true} activeModal={activeModal}/> : <ModalBtn type={false}/>}

        </div>
    )
}

function ModalBtn({type, activeModal}){

    // type === true  - информационное окно
    // type === false - окно с выбором действия

    if(type){

        return(

            <div className='modal-btns'>

                <div className='modal-btns__btn' onClick={()=> activeModal()}>Ок</div>

            </div>
        )

    } else {

        return(

            <div className='modal-btns modal-btns--childrean-justify'>

                <div className='modal-btns__btn'>Да</div>

                <div className='modal-btns__btn'>Нет</div>

            </div>
        )
    }
}

export default ModalWindow;