'use strict';
// Задание по проекту, получить каждый элемент в отдельную переменную:

// Кнопку "Рассчитать" через id
let start = document.getElementById('start');

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let box = document.querySelector('#deposit-check');

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalIncomeItemnput = document.querySelectorAll('.additional_income-item');

// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с 
// class="budget_day-value" и заканчивая class="target_month-value">
let rightSide = document.querySelector('.result');
let budgetMonthValue = rightSide.querySelector('.budget_month-value');
let budgetDayValue = rightSide.querySelector('.budget_day-value');
let expensesMonthValue = rightSide.querySelector('.expenses_month-value');
let additionaIncomeValue = rightSide.querySelector('.additional_income-value');
let additionalExpensesValue = rightSide.querySelector('.additional_expenses-value');
let incomePeriodValue = rightSide.querySelector('.income_period-value');
let targetMonthValue = rightSide.querySelector('.target_month-value');


// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.
let leftSide = document.querySelector('.data');
let salaryAmount = leftSide.querySelector('.salary-amount');
let incomeTitle = leftSide.querySelector('.income-items .income-title');
let addIncome1 = leftSide.querySelectorAll('.additional_income .additional_income-item')[0];
let addIncome2 = leftSide.querySelectorAll('.additional_income .additional_income-item')[1];
let expensesTitle = leftSide.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let depositCheckbox = leftSide.querySelector('#deposit-check');
let depositAmount = leftSide.querySelector('.deposit-amount');
let depositPercent = leftSide.querySelector('.deposit-percent');
let targetAmount = leftSide.querySelector('.target-amount');
let periodSelect = leftSide.querySelector('.period-select');
let additionalExpensesItem = leftSide.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');




let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
start.disabled=true;
let appData ={
    income: {},
    incomeMonth:0,
    expenses: {},
    addExpenses: [],
    addIncome:[],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget:0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    start: function(){

        appData.budget=+salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        
        appData.getAddExpenes();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
        salaryAmount.value='';
        start.disabled=true;
    },
    showResult:function(){
        budgetMonthValue.value=appData.budgetMonth;
        budgetDayValue.value=appData.budgetDay;
        expensesMonthValue.value=appData.expensesMonth;
        additionalExpensesValue.value=appData.addExpenses.join(', ');
        additionaIncomeValue.value=appData.addIncome.join(', ');
        targetMonthValue.value=appData.getTargetMonth();
        incomePeriodValue.value=appData.calcSavedMoney();
        periodSelect.addEventListener('input',appData.showResult); 

        
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
         if(expensesItems.length === 3){
             expensesPlus.style.display='none';
         }
    },
    addIncomeBlock:function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display='none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses!==''&&cashExpenses!==''){
                appData.expenses[itemExpenses]=cashExpenses;
            }
        });
    },
    getIncome:function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome!==''&&cashIncome!==''){
                appData.income[itemIncome]=cashIncome;
            }
        });
    },
    getAddExpenes: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item!==''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItemnput.forEach(function(item){
            let itemValue=item.value.trim();
            if(itemValue!==''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getInfoDeposit: function(){
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if(appData.deposit){
            do{
                appData.percentDeposit=prompt('Какой годовой процент?',10);
            }while(!isNumber( appData.percentDeposit));

            do{
                appData.moneyDeposit=prompt('Какая сумма заложена?',10000);
            }while(!isNumber( appData.moneyDeposit));
            }
    },
    getExpensesMonth: function(){
        
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getIncomeMonth: function(){
        
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
 },
    getBudget: function(){
        appData.budgetMonth=appData.budget + appData.incomeMonth -appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function(){
        return Math.ceil(targetAmount.value/appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay>=1200){
            return('У вас высокий уровень дохода');
        } else if (appData.budgetDay>=600){
            return('У вас средний уровень дохода');
        } else if(appData.budgetDay<600 && appData.budgetDay>0){
            return('К сожалению у вас уровень дохода ниже среднего');
        } else if(appData.budgetDay<=0){
            return('Что то пошло не так');
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth*periodSelect.value;
    },
    range: function(){
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent= periodSelect.value;
    },
    disabledButton: function(){
        if (salaryAmount.value.trim()!==''){
            start.disabled=false;
        }else{
            start.disabled=true;
        }
    }
   
};

start.addEventListener('click',appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock); 
periodSelect.addEventListener('input',appData.range); 
salaryAmount.addEventListener('input',appData.disabledButton);
