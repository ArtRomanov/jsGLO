'use strict';
let money;
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let start = function(){
    do {
         money = prompt('Ваш месячный доход?');
}
    while(!isNumber(money));
return money;
};
start();


let appData ={
    income: {},
    expenses: {},
    addExpenses: [],
    deposit: false,
    misson:50000,
    period:3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses=addExpenses.toLowerCase().split(' ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0;i<2;i++){
            let sum =0;
            let result=0;
            let expenses ={};
            expenses[i] = prompt('Введите обязательную статью расходов?');
            do{
             sum = +prompt('Во сколько это обойдется?');
                if(isNumber(sum)){
                    result+= +sum;
                }
            }while(!isNumber(sum));
            appData.expenses[expenses[i]]=sum;
        }
    },
    budget:money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0
};
appData.asking();


appData.getExpensesMonth = function(){
    let summury=0;
       for (let key in appData.expenses){
           summury+=appData.expenses[key];
           appData.expensesMonth=summury;
       }
return summury;
};
console.log('Сумма всех обязательных расходов за месяц: '+appData.getExpensesMonth());


//Функция возвращает накопления за месяц (доходы минус расходы)
appData.getAccumulatedMonth = function(){
   return money-appData.getExpensesMonth();
};


appData.getTargetMonth = function(){
appData.misson=Math.ceil(appData.misson/appData.getAccumulatedMonth());
    if(appData.misson<0){
        return('Цель не будет достигнута');
    } else {
        return('Цель будет достигнута за '+ appData.misson +' месяцев');
    }
};
console.log(appData.getTargetMonth());


//budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
appData.budgetDay = ((appData.getAccumulatedMonth())/30);
appData.getStatusIncome = function(){
    if (appData.budgetDay>=1200){
        return('У вас высокий уровень дохода');
    } else if (appData.budgetDay>=600){
        return('У вас средний уровень дохода');
    } else if(appData.budgetDay<600 && appData.budgetDay>0){
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if(appData.budgetDay<=0){
        return('Что то пошло не так');
    }
    };
    console.log(appData.getStatusIncome());


// Используя цикл for in для объекта (appData), вывести в консоль сообщение 
// "Наша программа включает в себя данные: " (вывести все свойства и значения)
for(let key in appData){
    console.log("Наша программа включает в себя данные: Key: " + key + ' Proper: ' + appData[key]);
}