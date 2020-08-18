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
let budgetMonth = rightSide.querySelector('.budget_month-value');
let budgetDay = rightSide.querySelector('.budget_day-value');
let expensesMonth = rightSide.querySelector('.expenses_month-value');
let addIncomeSum = rightSide.querySelector('.additional_income-value');
let addExpensesSum = rightSide.querySelector('.additional_expenses-value');
let incomePeriod = rightSide.querySelector('.income_period-value');
let targetMonth = rightSide.querySelector('.target_month-value');


// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.
let leftSide = document.querySelector('.data');
let salaryAmount = leftSide.querySelector('.salary-amount');
let incomeTitle = leftSide.querySelector('.income-items .income-title');
let incomeAmount = leftSide.querySelector('.income-amount');
let addIncome1 = leftSide.querySelectorAll('.additional_income .additional_income-item')[0];
let addIncome2 = leftSide.querySelectorAll('.additional_income .additional_income-item')[1];
let expensesTitle = leftSide.querySelector('.expenses-title');
let expensesAmount = leftSide.querySelector('.expenses-amount');
let depositCheckbox = leftSide.querySelector('#deposit-check');
let depositAmount = leftSide.querySelector('.deposit-amount');
let depositPercent = leftSide.querySelector('.deposit-percent');
let targetAmount = leftSide.querySelector('.target-amount');
let periodSelect = leftSide.querySelector('.period-select');
