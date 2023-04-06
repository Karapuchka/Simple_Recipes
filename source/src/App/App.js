import React, { useState } from 'react';
import Main from '../components/Main/Main';
import ModalWindow from '../components/ModalWindow/ModalWindow';

import './App.scss';

function App() {

  const [modalState, setModalState] = useState(false);

  const modalChacked = ()=>{
    setModalState(modalState => !modalState);
  }

  return (
    <div className={`wrapper gradient`}>
      <ModalWindow title={'Информация'} description={'МНОГО МНОГО МНОГО ТЕКСТА'} typeModal={true} activeModal={modalChacked} stateModal={modalState}/>
      <Main activeModal={modalChacked}/>
    </div>
  )
}

export default App;