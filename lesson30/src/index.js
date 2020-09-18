
import  'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'element-closest-polyfill';
import 'classlist-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';

import imgChange from './modules/imgChange';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


countTimer('20 september 2020 20:10:00');

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
