window.addEventListener('DOMContentLoaded', function(){
    'use strict';
function countTimer (deadLine){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

function getTimerRemaining(){    
    let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date ().getTime(),
        timeRemaining = (dateStop - dateNow)/1000,
        seconds = Math.floor(timeRemaining%60),
        minutes = Math.floor((timeRemaining/60)%60),
        hours = Math.floor(timeRemaining/ 60 /60),
        day = Math.floor(timeRemaining/60/60/24);
        return{timeRemaining, hours,minutes, seconds};
    }
    let idInit = setInterval(updateClock,1000);

function updateClock(){
        let timer = getTimerRemaining();
        timerHours.textContent = (timer.hours < 10) ? '0' + timer.hours : timer.hours;
        timerMinutes.textContent = (timer.seconds < 10) ? '0' + timer.seconds : timer.seconds;
        timerSeconds.textContent=(timer.minutes < 10) ? '0' + timer.minutes : timer.minutes;

        if(timer.timeRemaining<0){
            clearInterval(idInit);
        timerHours.textContent='00';
        timerMinutes.textContent='00';
        timerSeconds.textContent='00';
         }
    }
} 
    countTimer('2 september 2020 00:00:00');

    //меню
const toggleMenu = ()=>{
const btMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
       menu.classList.toggle('active-menu');
    };

    btMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click',handlerMenu);

    menuItems.forEach((elem)=>{
        elem.addEventListener('click', handlerMenu);
    });


};
toggleMenu();

    
    //popup

    const togglePopup = () =>{
    const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popUpContent = document.querySelector('.popup-content');
    let count=0;
    
        popupBtn.forEach((elem)=>{
            elem.addEventListener('click', function moveLeft(){
                count ++;
                popup.style.display='block';
                if(document.documentElement.clientWidth>768){
                popUpContent.style.left = count*4+'px';
                if(count<142.5){
                    setTimeout(moveLeft,5);
                }

            }
            });
        }); 
        popUpClose.addEventListener('click',()=>{
            popUpContent.style='none';
            popup.style.display='none';
            count =0;
        });
    };
    
    togglePopup();

});