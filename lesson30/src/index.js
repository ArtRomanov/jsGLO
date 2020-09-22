
import  'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'element-closest-polyfill';
import 'classlist-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
// import elementClosest from 'element-closest';
// elementClosest(window);
import 'formdata-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';

import imgChange from './modules/imgChange';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCompanies';

const newOne = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    // prev: '#test-left',
    // next: '#test-right',
    infinity: true,
    // настройки для аддаптивности
    responsive: [{
        breakpoint: 1024,
        slideToShow: 3
    },
    {
        breakpoint: 768,
        slideToShow: 2
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }]
});
newOne.init();


countTimer('25 september 2020 20:10:00');

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
