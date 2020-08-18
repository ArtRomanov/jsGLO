'use strict';
// Задание по проекту, получить каждый элемент в отдельную переменную:

// Кнопку "Рассчитать" через id
let count = document.getElementById('start');

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let plusOne = document.getElementsByTagName('button')[0];
let plusTwo = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let box = document.querySelector('#deposit-check');

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let input = document.querySelectorAll('.additional_income-item');

// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с 
// class="budget_day-value" и заканчивая class="target_month-value">
let rightSide = document.querySelector('.result');
let rightElemsValue1 = rightSide.querySelectorAll('.result-total')[0];
let rightElemsValue2 = rightSide.querySelectorAll('.result-total')[1];
let rightElemsValue3 = rightSide.querySelectorAll('.result-total')[2];
let rightElemsValue4 = rightSide.querySelectorAll('.result-total')[3];
let rightElemsValue5 = rightSide.querySelectorAll('.result-total')[4];
let rightElemsValue6 = rightSide.querySelectorAll('.result-total')[5];
let rightElemsValue7 = rightSide.querySelectorAll('.result-total')[6];


// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.
let leftSide = document.querySelector('.data');
let leftSideElemsValue1 = leftSide.querySelectorAll('input')[0];
let leftSideElemsValue2 = leftSide.querySelectorAll('input')[1];
let leftSideElemsValue3 = leftSide.querySelectorAll('input')[2];
let leftSideElemsValue4 = leftSide.querySelectorAll('input')[3];
let leftSideElemsValue5 = leftSide.querySelectorAll('input')[4];
let leftSideElemsValue6 = leftSide.querySelectorAll('input')[5];
let leftSideElemsValue7 = leftSide.querySelectorAll('input')[6];
let leftSideElemsValue8 = leftSide.querySelectorAll('input')[7];
let leftSideElemsValue9 = leftSide.querySelectorAll('input')[8];
let leftSideElemsValue10 = leftSide.querySelectorAll('input')[9];
let leftSideElemsValue11 = leftSide.querySelectorAll('input')[10];
let leftSideElemsValue12 = leftSide.querySelectorAll('input')[11];
let leftSideElemsValue13 = leftSide.querySelectorAll('input')[12];
