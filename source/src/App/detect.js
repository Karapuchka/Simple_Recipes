//Переменная для работы с устройством пользователя

import MobileDetect from 'mobile-detect';

let detect = new MobileDetect(window.navigator.userAgent);

export default detect;