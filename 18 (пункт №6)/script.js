'use strict';
let hello = document.querySelector('.hello'),
today = document.querySelector('.todayIs'),
currentTime = document.querySelector('.currentTime'),
countdown = document.querySelector('.countdown');
let dayTime=['Доброе утро!','Добрый день!','Добрый вечер!','Доброй ночи!'];
let dayOfTheWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];


function timer (deadLine) {

function sendTime(){
let date = new Date (),
    daysOfWeek = date.getDay(),
    dateStop = new Date(deadLine).getTime(),
    dateNow = new Date ().getTime(),
    timeRemaining = (dateStop - dateNow)/1000,
    day = Math.floor(timeRemaining/60/60/24),
    time = date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true });

 let currentHour;
    if(date.getHours() >=3 && date.getHours()<=10){
        currentHour=0;
    } else if(date.getHours() >10 && date.getHours()<=16){
        currentHour = 1;
    }else if(date.getHours() >16 && date.getHours()<=22){
        currentHour=2;
    } else {
        currentHour=3;
    }

return {day, time, currentHour};
}

setInterval( refresh,1000);

function refresh (){
   let sendTimeDate = sendTime();

hello.textContent = dayTime[sendTimeDate.currentHour];
today.textContent = 'Сегодня: ' + dayOfTheWeek[new Date ().getDay()];
currentTime.textContent = 'Текущее время: ' + sendTimeDate.time ;
countdown.textContent = 'До нового года осталось '+ sendTimeDate.day +' дней';

}
}

timer('31 december 2020 23:59:59');
