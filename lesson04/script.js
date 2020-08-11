'use strict';
let money = 30000;
let income = ('ноготочки');
let addExpenses = 'кОммуНалка, интернет, проезд';
let deposit = true;
let mission = 1000000;
let period = 12;

// Вывести в консоль тип данных значений переменных money, income, deposit;
//Вызовы функции showTypeOf (Задание №4)
let showTypeOf = function(data){
    console.log(data, typeof data + ' (showTypeOf)');
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//Вывести в консоль длину строки addExpenses
//console.log(addExpenses.length);
//Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
//console.log('Период равен ' + period + ' месяцев');
//console.log('Цель заработать ' + mission + ' долларов');
//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
// let low = addExpenses.toLowerCase();
// console.log(low.split(' '));

//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = (money/30);
//Вывести в консоль budgetDay
//console.log(budgetDay);

// Задание №3
// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = +prompt('Ваш месячный доход?',30000);

//Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
// сохранить в переменную addExpenses
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'молоко, хлеб, макбук');

console.log(addExpenses.split('  ') + ' (addExpenses)');

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit 
//(булево значение true/false)
deposit = confirm('Есть ли у вас депозит в банке?');

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
// “Введите обязательную статью расходов?” (например expenses1, expenses2)
// “Во сколько это обойдется?” (например amount1, amount2)
// в итоге 4 вопроса и 4 разные переменных
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 10000);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 10000);

//Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth
//и вывести результат в консоль

// let budgetMonth = money-(amount1+amount2);
// console.log('Бюджет на месяц: '+budgetMonth);

//Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль,
//округляя в большую сторону (методы объекта Math в помощь)

// let time = Math.ceil(mission/budgetMonth);
// console.log('Цель будет достигнута за: '+time);

//Поправить budgetDay учитывая бюджет на месяц, а не месячный доход.
//Вывести в консоль  округлив в меньшую сторону 


// Написать конструкцию условий (расчеты приведены в рублях)	
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
// Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
// Если отрицательное значение то вывести “Что то пошло не так”
// Учесть варианты 0, 600 и 1200
let getStatusIncome = function(){
if (budgetDay>=1200){
    return('У вас высокий уровень дохода');
} else if (budgetDay>=600){
    return('У вас средний уровень дохода');
} else if(budgetDay<600 && budgetDay>0){
    return('К сожалению у вас уровень дохода ниже среднего');
} else if(budgetDay<=0){
    return('Что то пошло не так');
}
};
console.log(getStatusIncome()+' (getStatusIncome)');

// Задание №4
//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
let getExpensesMonth = function(){
    return amount1+amount2;
};
console.log('Сумма всех обязательных расходов за месяц: '+getExpensesMonth()+' (getExpensesMonth)');

//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function(){
   return money-(amount1+amount2);
};

//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();

// Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления (accumulatedMonth) и возвращает результат
let getTargetMonth = function(){
    return Math.ceil(mission/accumulatedMonth);
};
console.log('Цель будет достигнута за '+getTargetMonth()+' месяцев'+' (getTargetMonth)');

//budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay = ((money-accumulatedMonth)/30);
console.log('Бюджет на день: ' + Math.floor(budgetDay)+' (budgetDay)');