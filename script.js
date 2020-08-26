'use strict';
class CarWash {
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
        this.washed=false;
    }
    washReady(){
        this.washed=true;
    }
    report(){
        console.log(this.brand, this.model, this.washed);
    }
}
const car1=new CarWash('mazda','3');
car1.washReady();
car1.report();
