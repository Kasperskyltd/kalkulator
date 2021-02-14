'use strict';

function calc() {
    // console.log(this);
    const buttonValue = this.value;
    // console.log(buttonValue);
    const resPlace = document.querySelector("#res");

    if(buttonValue === 'C') {
        resPlace.value = '';    
    } else if(buttonValue === '=') {
        resPlace.value = eval(resPlace.value);
    } else {
        resPlace.value += buttonValue;
    }
}

const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(elem => {

    elem.addEventListener('click', calc);

});