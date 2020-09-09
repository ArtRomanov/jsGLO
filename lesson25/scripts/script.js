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

    //меню, исправлены обработчики к задание по уроку №20
const toggleMenu = ()=>{
const btMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

btMenu.addEventListener('click', ()=>{
        menu.classList.toggle('active-menu');
    });

menu.addEventListener('click',()=>{
    let target = event.target;
    if(target.classList.contains('close-btn') || target!==menu){

        target=target.closest('.close-btn');

        menu.classList.toggle('active-menu');
    }
});
};
toggleMenu();

    
    //popup

const togglePopup = () =>{

    const   popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
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

        popup.addEventListener('click', (event)=>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popUpContent.style='none';
                popup.style.display='none';
                
                    count =0;
            }else{

                target = target.closest('.popup-content');

                if(!target){
                    popUpContent.style='none';
                    popup.style.display='none';
                    

                    count =0;
                }
            }
        });
};
    
togglePopup();

    //табы

const tabs = ()=>{
    const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index)=>{
        for (let i=0;i<tabContent.length;i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            }else{
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };
    tabHeader.addEventListener('click', (event)=>{
        let target = event.target;
        target=target.closest('.service-header-tab');
               
            if(target){
            tab.forEach((item,i)=>{
                if(item===target){
                    toggleTabContent(i);
                }
            });
        }
    });
};
tabs();

//слайдер 

const slider = ()=>{
    const slide = document.querySelectorAll('.portfolio-item'),
    btn=document.querySelectorAll('.portfolio-btn'),
   
    slider=document.querySelector('.portfolio-content'),
    dotBlock = document.querySelector('.portfolio-dots');

    let currentSlide =0,
     interval,
     newDot;
     

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);

    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
 
    };

    // Создаём новые точки
    const createDots = ()=>{
        for(let i=0;i<slide.length;i++){
        newDot = document.createElement('li');
        newDot.classList.add('dot');
        dotBlock.append(newDot);
        }
    };
    createDots();
    // Создаём псевдо-массив точек по классу dot и присваиваем первому элементу класс dot-active
    let dot=document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide,'portfolio-item-active');
        prevSlide(dot,currentSlide,'dot-active');
        currentSlide++;
        if(currentSlide>=slide.length){
            currentSlide=0;
        }
        nextSlide(slide, currentSlide,'portfolio-item-active');
        nextSlide(dot,currentSlide,'dot-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide,time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event)=>{
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;     
           }

        prevSlide(slide, currentSlide,'portfolio-item-active');
        prevSlide(dot,currentSlide,'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }else if(target.matches('.dot')){
            dot.forEach((elem,index)=>{
                if(elem === target){
                    currentSlide = index;
                }
            });
        }
        if(currentSlide>=slide.length){
            currentSlide=0;
        }else if(currentSlide<0){
            currentSlide=slide.length-1;
        }
        nextSlide(slide, currentSlide,'portfolio-item-active');
        nextSlide(dot,currentSlide,'dot-active');
    });


    slider.addEventListener('mouseover', (event)=>{
        if(event.target.matches('.portfolio-btn')||
        event.target.matches('.dot')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event)=>{
        if(event.target.matches('.portfolio-btn')||
        event.target.matches('.dot')){
            startSlide();
        }
    });
    startSlide(1500);
};

slider();

//смена юзерпиков
const imgChange = ()=>{
    const commandPhotos = document.querySelectorAll('.command__photo');
    let arrSrc=[];
    for(let i=0;i<commandPhotos.length;i++){
        arrSrc[i]=commandPhotos[i].getAttribute('src');
    }
    commandPhotos.forEach((item,i)=>{
        let target = event.target;
        item.addEventListener('mouseenter',(e)=>{
                event.target.src= event.target.dataset.img;
        });
        item.addEventListener('mouseleave',(e)=>{
                event.target.src=arrSrc[i];
        });
    });
};
imgChange();

//ограничение ввода данных в калькуляторе
const calcInput =()=>{
    const calcBlock = document.getElementById('calc'),
        inputs = calcBlock.querySelectorAll('input');

    inputs.forEach((item)=>{
        item.addEventListener('input',()=>{
            item.value=item.value.replace(/[\D]/g,'');
        });
    });

};
calcInput();

//калькулятор (24)

const calc=(price=100)=>{
    const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');
    
    const countSum = () =>{
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue= calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;


        if(calcCount.value>1){
            countValue+=(calcCount.value-1)/10;
        }

        if(calcDay.value && calcDay.value<5){
            dayValue*=2;
        }else if(calcDay.value && calcDay.value<10){
            dayValue*=1.5;
        }

        if(typeValue && squareValue){
            total = Math.ceil(price*typeValue*squareValue*countValue*dayValue);

        }

        animate({duration: 300, //скорость воспроизведения анимации
            
            timing(timeFraction) {
                
                return timeFraction;//рассчёт времени
            },

            draw(progress) {

                totalValue.textContent = Math.floor(progress * total); //вывод на страницу
            }
        });
    };

    calcBlock.addEventListener('change', (event)=>{
        const target = event.target;

        if(target.matches('select')||target.matches('input')){
        
            countSum(); 
        }
    });

    // функция запуска анимации 
    function animate({ duration, draw, timing }) {

    let start = performance.now();//время в м.с. с момента загрузки страницы

    requestAnimationFrame(function animate(time) {

        let timeFraction = (time - start) / duration;

        if (timeFraction > 1){
            timeFraction = 1;
        }
        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
    }
};
calc(100);
});