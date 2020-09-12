'use strict';

let start = document.getElementById('start');

let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

let box = document.querySelector('#deposit-check');

let additionalIncomeItemInput = document.querySelectorAll('.additional_income-item');

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
additionalExpensesItemInput = leftSide.querySelectorAll('.additional_expenses-item'),
incomeItems = document.querySelectorAll('.income-items'),
periodAmount = document.querySelector('.period-amount'),
resetButn = document.getElementById('cancel'),
main = document.querySelector('.main');


let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
start.disabled=true;

const AppData = function(){
    this.income =  {};
    this.incomeMonth = 0;
    this.expenses =  {};
    this.addExpenses =  [];
    this.addIncome = [];
    this.deposit =  false;
    this.percentDeposit =  0;
    this.moneyDeposit =  0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};

AppData.prototype.disabledButton=function(){
    if (salaryAmount.value.trim()!==''){
        start.disabled=false;
    }else{
        start.disabled=true;
    }
};

AppData.prototype.start= function(){

    this.budget=+salaryAmount.value;

    this.getExpInc();
    this.getAddIncExpTest();
    this.getBudget();
    this.showResult();
    
    start.style.display='none';
    resetButn.style.display='block';
};


AppData.prototype.showResult=function(){
    const _this = this;//псевдо-this

    budgetMonthValue.value=this.budget+this.incomeMonth;
    budgetDayValue.value=this.budgetDay;
    expensesMonthValue.value=this.expensesMonth;
    additionalExpensesValue.value=this.addExpenses.join(', ');
    additionaIncomeValue.value=this.addIncome.join(', ');
    targetMonthValue.value=this.getTargetMonth();
    
    
    periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = _this.calcSavedMoney();
    }); 
    incomePeriodValue.value=this.calcSavedMoney();

    
};

//Слияние addExpensesBlock и addIncomeBlock

AppData.prototype.addIncExpBlock=function(event){
    let target = event.target;
    const newElem = (elemClassName) =>{
        let selectedItems = document.querySelectorAll(`.${elemClassName}-items`);
        let cloneItem = selectedItems[0].cloneNode(true);

        selectedItems[0].parentNode.insertBefore(cloneItem, target);
        selectedItems = document.querySelectorAll(`.${elemClassName}-items`);

            if(selectedItems.length === 3){
                target.style.display='none';
            }
    };

    if(target.classList.contains('income_add')){

        newElem(target.className.split(' ')[1].split('_')[0]);

    } else if(target.classList.contains('expenses_add')){

        newElem(target.className.split(' ')[1].split('_')[0]);

    }
};

//Слияние getExpenses и getIncome

AppData.prototype.getExpInc=function(){
    const _this = this;
    const count = item =>{
        const startStr=item.className.split('-')[0];

        const itemTitle = item.querySelector(`.${startStr}-title`).value;
        const itemAmount=item.querySelector(`.${startStr}-amount`).value;
        if(itemTitle!=='' && itemAmount!==''){
            _this[startStr][itemTitle]=itemAmount;  
        }
       
    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);
    for (let key in this.income){
        this.incomeMonth += +this.income[key];
    }
    for (let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
        
    }
};

//Слияние getAddIncome и getAddExpenses

AppData.prototype.getAddIncExpTest= function(){

    const trimFunc =item=>{
        const startStr = item.className.split('_')[1].split('-')[0];
        let itemValue = item.value.trim();


        if(item.value !== '' && startStr==='income'){
            this.addIncome.push(itemValue);
        }else if(item.value!=='' && startStr==='expenses'){
            itemValue=itemValue.split(',');
            itemValue.forEach((item,i)=>{
                this.addExpenses.push(itemValue[i].trim());
            });
        }
    };

        additionalIncomeItemInput.forEach(trimFunc);
        additionalExpensesItemInput.forEach(trimFunc);
};


AppData.prototype.getInfoDeposit= function(){
    this.deposit = confirm('Есть ли у вас депозит в банке?');
    if(this.deposit){
        do{
            this.percentDeposit=prompt('Какой годовой процент?',10);
        }while(!isNumber( this.percentDeposit));

        do{
            this.moneyDeposit=prompt('Какая сумма заложена?',10000);
        }while(!isNumber( this.moneyDeposit));
        }
        
};
AppData.prototype.getBudget= function(){
    this.budgetMonth=this.budget + this.incomeMonth -this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth/30);
};
AppData.prototype.getTargetMonth= function(){
    return Math.ceil(targetAmount.value/this.budgetMonth);
};
AppData.prototype.getStatusIncome= function(){
    if (this.budgetDay>=1200){
        return('У вас высокий уровень дохода');
    } else if (this.budgetDay>=600){
        return('У вас средний уровень дохода');
    } else if(this.budgetDay<600 && this.budgetDay>0){
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if(this.budgetDay<=0){
        return('Что то пошло не так');
    }
};
AppData.prototype.calcSavedMoney= function(){
    return this.budgetMonth*periodSelect.value;
};
AppData.prototype.reset=function(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(item){
        item.value=null;
        item.disabled=false;
    }
    );

   
    periodSelect.value=1;
    periodAmount.textContent=1;

    if(expensesItems.length > 1){
        for (let i=1;i<expensesItems.length;i++){
            expensesItems[i].remove();
        }
        expensesPlus.style.display='block';
    }
    if(incomeItems.length > 1){
        for (let i=1;i<incomeItems.length;i++){
            incomeItems[i].remove();
        }
        incomePlus.style.display='block';
    }
    
    start.style.display='block';
    resetButn.style.display='none';
    this.budget = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.depositPercent = 0;
    this.depositMoney = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    
};
AppData.prototype.blockInputs=function(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(item){
        item.disabled=true;
    }
    );
periodSelect.disabled=false;
};

AppData.prototype.eventListener=function(){
    const _this=this;
    start.addEventListener('click',this.start.bind(_this));
    start.addEventListener('click',this.blockInputs);
    
    expensesPlus.addEventListener('click', this.addIncExpBlock);
    incomePlus.addEventListener('click',this.addIncExpBlock); 
    periodSelect.addEventListener('input', function () {
        periodAmount.textContent = periodSelect.value;
    }); 
    salaryAmount.addEventListener('input',this.disabledButton);
    resetButn.addEventListener('click',this.reset.bind(_this));
};
const appData = new AppData();
appData.eventListener();



    
      