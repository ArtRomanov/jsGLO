'use strict';
let money;
let income = ('ноготочки');
let addExpenses = 'кОммуНалка, интернет, проезд';
let deposit = true;
let mission = 1000000;
let period = 12;

// Задание №5
// Переписать функцию start циклом do while
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function(){
    do { money = +prompt('Ваш месячный доход?');
}
    while(!isNumber(money));
return money;
};

console.log(start()+ ' ЗАДАНИЕ №5');

// Вывести в консоль тип данных значений переменных money, income, deposit;
//Вызовы функции showTypeOf (Задание №4)
let showTypeOf = function(data){
    console.log(data, typeof data);
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


//Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
// сохранить в переменную addExpenses
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'молоко, хлеб, макбук');

console.log(addExpenses.split('  '));

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit 
//(булево значение true/false)
deposit = confirm('Есть ли у вас депозит в банке?');


// let expenses1 = prompt('Введите обязательную статью расходов?');
// let amount1 = +prompt('Во сколько это обойдется?', 10000);
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount2 = +prompt('Во сколько это обойдется?', 10000);

// Задание №5
//Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос
//'Во сколько это обойдется?’ в функции  getExpensesMonth
let sum;
let expenses =[];
let i =0;
let result=0;
let getExpensesMonth = function(){
       for (let i=0;i<2;i++){
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do{
        sum = prompt('Во сколько это обойдется?');
            if(isNumber(sum)){
                result+= +sum;
            }
        }while(!isNumber(sum));
    }
return result;
};

let expensesAmount=getExpensesMonth();

console.log('Сумма всех обязательных расходов за месяц: '+expensesAmount+' ЗАДАНИЕ №5');


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
console.log(getStatusIncome());



//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function(){
   return money-(expensesAmount);
};

//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();

// Задание №5
// Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута”
//необходимо выводить “Цель не будет достигнута”
let getTargetMonth = function(){
let target=Math.ceil(mission/accumulatedMonth);
    if(target<0){
        return('Цель не будет достигнута');
    } else {
        return('Цель будет достигнута за '+ target +' месяцев');
    }
};
console.log(getTargetMonth() + ' ЗАДАНИЕ №5');

//budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay = ((money-accumulatedMonth)/30);
console.log('Бюджет на день: ' + Math.floor(budgetDay));