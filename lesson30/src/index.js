'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import imgChange from './modules/imgChange';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


countTimer('2 september 2020 00:00:00');

//меню, исправлены обработчики к задание по уроку №20
toggleMenu();

    
//popup
togglePopup();

//табы
tabs();

//слайдер 
slider();

//смена юзерпиков
imgChange();

//калькулятор (24)
calc(100);

// send ajax-form
sendForm();