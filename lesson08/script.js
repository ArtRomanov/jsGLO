'use strict';
let money;
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function(){
    do {
         money = prompt('Ваш месячный доход?',50000);
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
    percentDeposit: 0,
    moneyDeposit: 0,
    misson:50000,
    period:3,
    budget:money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let cashIncome=0;
            let itemIncome=0;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Хакинг');
                }while(isNumber(itemIncome)|| itemIncome.trim()==='');
            do{
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '0');
                } while(!isNumber(cashIncome));
            appData.income[itemIncome]=cashIncome;
        }


        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses=addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0;i<2;i++){
            let sum =0;
            let result=0;
            let expenses ={};
            do {
                expenses[i] = prompt('Введите обязательную статью расходов?', 'Овощи');
            }while(isNumber(expenses[i]) || expenses[i].trim()==='');
            do{
             sum = prompt('Во сколько это обойдется?', 100);
                if(isNumber(sum)){
                    result+= +sum;
                }
            }while(!isNumber(sum));
            appData.expenses[expenses[i]]=sum;
        }
    },
    getInfoDeposit: function(){
        if(appData.income){
            do{
                appData.percentDeposit=prompt('Какой годовой процент?',10);
            }while(!isNumber( appData.percentDeposit));

            do{
                appData.moneyDeposit=prompt('Какая сумма заложена?',10000);
            }while(!isNumber( appData.moneyDeposit));
            }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth*appData.period;
    }
   
};
appData.asking();


appData.getExpensesMonth = function(){
    let summury=0;
       for (let key in appData.expenses){
           summury+=parseInt(appData.expenses[key]);
           appData.expensesMonth=summury;
       }
return summury;
};
console.log('Сумма всех обязательных расходов за месяц: '+appData.getExpensesMonth());



appData.getAccumulatedMonth = function(){
    appData.budgetMonth=money-appData.getExpensesMonth();
   return appData.budgetMonth;
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



for(let key in appData){
    console.log("Наша программа включает в себя данные: Key: " + key + ' Proper: ' + appData[key]);
}


console.log(appData);
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

// Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены 
//запятой и пробелом;
let fin='';
for(let i=0;i<appData.addExpenses.length;i++){
    let words = appData.addExpenses[i].trim();
    let first = words.substring(0, 1).toUpperCase();
    let left = words.substring(1, words.length);

    if(i===appData.addExpenses.length-1){
        fin += first + left;
    }else{
    fin += first + left+', ';}
}
console.log('Возможные расходы: '+fin);