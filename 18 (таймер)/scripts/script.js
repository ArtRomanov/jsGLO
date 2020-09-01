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
});