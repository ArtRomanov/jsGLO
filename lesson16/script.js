'use strict';

const   start = document.getElementById('start'),
        incomePlus = document.getElementsByTagName('button')[0],
        expensesPlus = document.getElementsByTagName('button')[1],
        box = document.querySelector('#deposit-check'),
        additionalIncomeItemnput = document.querySelectorAll('.additional_income-item');

const   rightSide = document.querySelector('.result'),
        budgetMonthValue = rightSide.querySelector('.budget_month-value'),
        budgetDayValue = rightSide.querySelector('.budget_day-value'),
        expensesMonthValue = rightSide.querySelector('.expenses_month-value'),
        additionaIncomeValue = rightSide.querySelector('.additional_income-value'),
        additionalExpensesValue = rightSide.querySelector('.additional_expenses-value'),
        incomePeriodValue = rightSide.querySelector('.income_period-value'),
        targetMonthValue = rightSide.querySelector('.target_month-value');


const   leftSide = document.querySelector('.data'),
        salaryAmount = leftSide.querySelector('.salary-amount'),
        incomeTitle = leftSide.querySelector('.income-items .income-title'),
        addIncome1 = leftSide.querySelectorAll('.additional_income .additional_income-item')[0],
        addIncome2 = leftSide.querySelectorAll('.additional_income .additional_income-item')[1],
        expensesTitle = leftSide.querySelector('.expenses-title'),
        expensesItems = document.querySelectorAll('.expenses-items'),
        depositCheck = leftSide.querySelector('#deposit-check'),
        depositAmount = leftSide.querySelector('.deposit-amount'),
        depositPercent = leftSide.querySelector('.deposit-percent'),
        targetAmount = leftSide.querySelector('.target-amount'),
        periodSelect = leftSide.querySelector('.period-select'),
        additionalExpensesItem = leftSide.querySelector('.additional_expenses-item'),
        incomeItems = document.querySelectorAll('.income-items'),
        periodAmount = document.querySelector('.period-amount'),
        resetButn = document.getElementById('cancel'),
        main = document.querySelector('.main'),
        depositBank = document.querySelector('.deposit-bank');

const isNumber = (n)=>{
    return !isNaN(parseFloat(n)) && isFinite(n);
};
start.disabled=true;

class AppData {
    constructor(){
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
    this.expensesMonth=0;
}
    
disabledButton(){
    if (salaryAmount.value.trim()!==''){
        start.disabled=false;
    }else{
        start.disabled=true;
    }
}

start(){

    this.budget=+salaryAmount.value;
    this.getInfoDeposit();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenes();
    this.getAddIncome();
    this.getBudget();
    this.getTargetMonth();
    this.showResult();
    
    start.style.display='none';
    resetButn.style.display='block';
}


showResult(){
    budgetMonthValue.value=this.budgetMonth;
    budgetDayValue.value=this.budgetDay;
    expensesMonthValue.value=this.expensesMonth;
    additionalExpensesValue.value=this.addExpenses.join(', ');
    additionaIncomeValue.value=this.addIncome.join(', ');
    targetMonthValue.value=this.getTargetMonth();
    
    
    periodSelect.addEventListener('input',  () => {
        incomePeriodValue.value = this.calcSavedMoney();
    }); 
    incomePeriodValue.value=this.calcSavedMoney();

    
}
addExpensesBlock(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    cloneExpensesItem = document.querySelectorAll('.expenses-items');
     if(cloneExpensesItem.length === 3){
        expensesPlus.style.display='none';
     }
}
addIncomeBlock(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    cloneIncomeItem = document.querySelectorAll('.income-items');
    if(cloneIncomeItem.length === 3){
        incomePlus.style.display='none';
    }
}
getExpenses(){
    let cloneExpensesItem = document.querySelectorAll('.expenses-items');
    cloneExpensesItem.forEach((item)=>{
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses!==''&&cashExpenses!==''){
            this.expenses[itemExpenses]=cashExpenses;
        }
    });
}
getIncome(){
    let cloneIncomeItem = document.querySelectorAll('.income-items');
    cloneIncomeItem.forEach((item)=>{
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome!==''&&cashIncome!==''){
            this.income[itemIncome]=cashIncome;
        }
    });
}
getAddExpenes(){
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item)=>{
        item = item.trim();
        if(item!==''){
            this.addExpenses.push(item);
        }
    });
}
getAddIncome(){
    additionalIncomeItemnput.forEach((item)=>{
        const itemValue=item.value.trim();
        if(itemValue!==''){
            this.addIncome.push(itemValue);
        }
    });
}
getInfoDeposit(){
    if(this.deposit){
       this.percentDeposit=depositPercent.value;
       this.moneyDeposit=depositAmount.value;
    }
        
}
getExpensesMonth(){
    
    for (let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
        
    }
}
getIncomeMonth(){
    
    for (let key in this.income){
        this.incomeMonth += +this.income[key];
    }
}
getBudget(){
    const monthDeposit = this.moneyDeposit*(this.percentDeposit/100);
    this.budgetMonth=this.budget + this.incomeMonth -this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth/30);
}
getTargetMonth(){
    return Math.ceil(targetAmount.value/this.budgetMonth);
}
getStatusIncome(){
    if (this.budgetDay>=1200){
        return('У вас высокий уровень дохода');
    } else if (this.budgetDay>=600){
        return('У вас средний уровень дохода');
    } else if(this.budgetDay<600 && this.budgetDay>0){
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if(this.budgetDay<=0){
        return('Что то пошло не так');
    }
}
calcSavedMoney(){
    return this.budgetMonth*periodSelect.value;
}
reset(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach((item)=>{
        item.value=null;
        item.disabled=false;
    });
    periodSelect.value=1;
    periodAmount.textContent=1;
    depositCheck.checked=false;
    this.depositHandler();

    const cloneExpensesItem = document.querySelectorAll('.expenses-items');
    if(cloneExpensesItem.length > 1){
        for (let i=1;i<cloneExpensesItem.length;i++){
            cloneExpensesItem[i].remove();
        }
        expensesPlus.style.display='block';
    }
    const cloneIncomeItem = document.querySelectorAll('.income-items');

    if(cloneIncomeItem.length > 1){
        for (let i=1;i<cloneIncomeItem.length;i++){
            cloneIncomeItem[i].remove();
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
    
}
blockInputs(){
    const inputs = document.querySelectorAll('input');

    inputs.forEach((item)=>{
        item.disabled=true;
    });
    periodSelect.disabled=false;
}
changePercent(){
    const valueSelect = this.value;

    if(valueSelect === 'other'){
        depositPercent.style.display='inline-block';
        depositPercent.value='';
        depositPercent.addEventListener('input', function(){
            if(!isNumber(depositPercent.value) || depositPercent.value<=0 || depositPercent.value>=100 ){
                alert('Это банковский депозит - а не Уолл-стрит! Введи корректное значение от 0 до 100!');
                depositPercent.value='';
                start.disabled=true;
            } else {
                start.disabled=false;
            }
        });

    } else {
        depositPercent.value=valueSelect;
        depositPercent.style.display='none';
}
}
depositHandler(){
    if(depositCheck.checked){
        depositBank.style.display='inline-block';
        depositAmount.style.display='inline-block';
        depositPercent.style.display='none';
        this.deposit=true;
        depositBank.addEventListener('change', this.changePercent);
    } else {
        depositBank.style.display='none';
        depositAmount.style.display='none';
        depositBank.value='';
        depositAmount.value='';
        this.deposit=false;
        depositBank.removeEventListener('change', this.changePercent);

    }
}
eventListener(){
    const _this=this;
    start.addEventListener('click',this.start.bind(_this));
    start.addEventListener('click',this.blockInputs);
    
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click',this.addIncomeBlock); 
    periodSelect.addEventListener('input', () => {
        periodAmount.textContent = periodSelect.value;
    }); 
    salaryAmount.addEventListener('input',this.disabledButton);
    resetButn.addEventListener('click',this.reset.bind(_this));
    depositCheck.addEventListener('change',this.depositHandler.bind(this));
}
}
const appData = new AppData();
appData.eventListener();



    
      