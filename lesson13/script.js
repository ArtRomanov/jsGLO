'use strict';

let start = document.getElementById('start');

let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

let box = document.querySelector('#deposit-check');

let additionalIncomeItemnput = document.querySelectorAll('.additional_income-item');

let rightSide = document.querySelector('.result');
let budgetMonthValue = rightSide.querySelector('.budget_month-value');
let budgetDayValue = rightSide.querySelector('.budget_day-value');
let expensesMonthValue = rightSide.querySelector('.expenses_month-value');
let additionaIncomeValue = rightSide.querySelector('.additional_income-value');
let additionalExpensesValue = rightSide.querySelector('.additional_expenses-value');
let incomePeriodValue = rightSide.querySelector('.income_period-value');
let targetMonthValue = rightSide.querySelector('.target_month-value');


let leftSide = document.querySelector('.data'),
salaryAmount = leftSide.querySelector('.salary-amount'),
incomeTitle = leftSide.querySelector('.income-items .income-title'),
addIncome1 = leftSide.querySelectorAll('.additional_income .additional_income-item')[0],
addIncome2 = leftSide.querySelectorAll('.additional_income .additional_income-item')[1],
expensesTitle = leftSide.querySelector('.expenses-title'),
expensesItems = document.querySelectorAll('.expenses-items'),
depositCheckbox = leftSide.querySelector('#deposit-check'),
depositAmount = leftSide.querySelector('.deposit-amount'),
depositPercent = leftSide.querySelector('.deposit-percent'),
targetAmount = leftSide.querySelector('.target-amount'),
periodSelect = leftSide.querySelector('.period-select'),
additionalExpensesItem = leftSide.querySelector('.additional_expenses-item'),
incomeItems = document.querySelectorAll('.income-items'),
periodAmount = document.querySelector('.period-amount'),
cancelButn = document.getElementById('cancel'),
main = document.querySelector('.main');


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

        this.budget=+salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getAddExpenes();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
        
        start.style.display='none';
        cancelButn.style.display='block';
    },
    showResult:function(){
        budgetMonthValue.value=this.budgetMonth;
        budgetDayValue.value=this.budgetDay;
        expensesMonthValue.value=this.expensesMonth;
        additionalExpensesValue.value=this.addExpenses.join(', ');
        additionaIncomeValue.value=this.addIncome.join(', ');
        targetMonthValue.value=this.getTargetMonth();
        incomePeriodValue.value=this.calcSavedMoney();
        periodSelect.addEventListener('input', function () {
			incomePeriodValue.value = appData.calcSavedMoney();
		}); 

        
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
        if(this.deposit){
            do{
                appData.percentDeposit=prompt('Какой годовой процент?',10);
            }while(!isNumber( this.percentDeposit));

            do{
                appData.moneyDeposit=prompt('Какая сумма заложена?',10000);
            }while(!isNumber( this.moneyDeposit));
            }
            
    },
    getExpensesMonth: function(){
        
        for (let key in this.expenses){
            appData.expensesMonth += +appData.expenses[key];
            
        }
    },
    getIncomeMonth: function(){
        
        for (let key in this.income){
            appData.incomeMonth += +appData.income[key];
        }
 },
    getBudget: function(){
        this.budgetMonth=this.budget + this.incomeMonth -this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth/30);
    },
    getTargetMonth: function(){
        return Math.ceil(targetAmount.value/this.budgetMonth);
    },
    getStatusIncome: function(){
        if (this.budgetDay>=1200){
            return('У вас высокий уровень дохода');
        } else if (this.budgetDay>=600){
            return('У вас средний уровень дохода');
        } else if(this.budgetDay<600 && this.budgetDay>0){
            return('К сожалению у вас уровень дохода ниже среднего');
        } else if(this.budgetDay<=0){
            return('Что то пошло не так');
        }
    },
    calcSavedMoney: function(){
        return this.budgetMonth*periodSelect.value;
    },
    disabledButton: function(){
        if (salaryAmount.value.trim()!==''){
            start.disabled=false;
        }else{
            start.disabled=true;
        }
    },
    reset:function(){
        salaryAmount.value='';
        window.location.reload();
    },
    blockInputs:function(){
        let inputs = document.querySelectorAll('input');
        inputs.forEach(function(item){
            item.disabled=true;
        }
        );
    periodSelect.disabled=false;
    }
   
};

start.addEventListener('click',appData.start.bind(appData));
start.addEventListener('click',appData.blockInputs);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock); 
periodSelect.addEventListener('input', function () {
	periodAmount.textContent = periodSelect.value;
}); 
salaryAmount.addEventListener('input',appData.disabledButton);
cancelButn.addEventListener('click',appData.reset);


        