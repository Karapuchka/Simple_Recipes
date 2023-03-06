import './App.css';

import MobileHeader from './components/mobile/header/Header.js';
import MobileMain from './components/mobile/main/Main.js';
import MobileFooter from './components/mobile/footer/Footer.js';

import DekstopHeader from './components/dekstop/header/Header.js'
import DekstopMain from './components/dekstop/main/Main.js';
import DekstopFooter from './components/dekstop/footer/Footer.js';

import MobileDetect from '../node_modules/mobile-detect/mobile-detect.js';

let detect = new MobileDetect(window.navigator.userAgent);

function App() {

  if(detect.mobile()){
    
    return (
      <div className="wrapper">
        <MobileHeader />
        <MobileMain />
        <MobileFooter />
      </div>
    );

  } else {

    return (
      <div className="wrapper">
        <DekstopHeader />
        <DekstopMain />
        <DekstopFooter />
      </div>
    );

  }
 
}

export default App;
