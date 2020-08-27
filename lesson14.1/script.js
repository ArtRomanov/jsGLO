 'use strict';
function DomElement(selector,height,width,bg,fontSize){
    this.selector=selector;
    this.height=height;
    this.width=width;
    this.bg=bg; 
    this.fontSize=fontSize;
}
let doc = document.querySelector('body');


DomElement.prototype.method=function(){
        if(this.selector.startsWith('.')){
            let elementDiv = document.createElement('div');
            elementDiv.className=this.selector.substring(1);
            elementDiv.style.cssText=`height:`+ this.height +
             `px; width:`+ this.width+`px; background-color:`+ this.bg + `;fontSize:`+this.fontSize+`px;`;
            elementDiv.textContent=this.selector.substring(1);
            doc.append(elementDiv);
            
        }else if(this.selector.startsWith('#')){
            let elementParag = document.createElement('p');
            elementParag.setAttribute('id',this.selector.substring(1));
            elementParag.style.cssText=`height:`+ this.height +
             `px; width:`+ this.width+`px; background-color:`+ this.bg + `;fontSize:`+this.fontSize+`px;`;
            elementParag.textContent=this.selector.substring(1);
            doc.append(elementParag);
        }
    
};

let test = new DomElement('#заthisни','300','300','pink','55');
test.method();