import './App.scss';

import Header from '../Components/Header/Header.js';
import ModalWindow from '../Components/ModalWindow/ModalWindow';
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const setStateModal = ()=>{

    setOpenModal(openModal => !openModal);

  }

  return (
    <div className="wrapper">
      <Header      setStateModal={setStateModal}/>
      <ModalWindow stateModal={openModal} setStateModal={setStateModal}/>
      
    </div>
  )
}

export default App;
