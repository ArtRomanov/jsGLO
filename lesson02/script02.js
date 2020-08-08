let money = 13;
let income = ('ноготочки');
let addExpenses = 'кОммуНалка, интернет, проезд';
let deposit = true;
let mission = 1000000;
let period = 12;

// Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
//Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
//Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
let low = addExpenses.toLowerCase();
console.log(low.split(' '));

//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = (mission/period)/30;
//Вывести в консоль budgetDay
console.log(budgetDay);

