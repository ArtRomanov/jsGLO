window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    // Timer 
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
    function updateClock(){
        let timer = getTimerRemaining();
        timer.hours = (timer.hours < 10) ? '0' + timer.hours : timer.hours;
        timer.seconds = (timer.seconds < 10) ? '0' + timer.seconds : timer.seconds;
        timer.minutes=(timer.minutes < 10) ? '0' + timer.minutes : timer.minutes;

        timerHours.textContent=timer.hours;
        timerMinutes.textContent=timer.minutes;
        timerSeconds.textContent=timer.seconds;
        if(timer.timeRemaining>0){
        let idInt = setInterval (updateClock,1000);
        }   else if(timer.timeRemaining<0){
            clearInterval(idInt);
       timerHours.textContent='00';
       timerMinutes.textContent='00';
       timerSeconds.textContent='00';
       }
        console.log(timer.timeRemaining);
    }
    
  
    updateClock();
}
    
    countTimer('31 august 2020 23:41:55');
});