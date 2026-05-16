let inputEl = document.getElementById('result');
let equalEl = document.getElementById('equal');
let clearEl = document.getElementById('clear');
let delEl = document.getElementById('delete');
let numberButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll('.cal');
let decimalEl = document.getElementById('decimal');
let percentEl = document.getElementById('percent');

numberButtons.forEach(function(button){
    button.addEventListener('click', function(){
        inputEl.value += button.textContent
    })
})

operatorButtons.forEach(function(cal){
    cal.addEventListener('click', function(){
        inputEl.value += " " + cal.textContent + " "
    })
})

delEl.addEventListener('click', function(){
    inputEl.value = inputEl.value.slice(0, -1)
})

decimalEl.addEventListener('click', function(){
     inputEl.value += decimalEl.textContent
})

percentEl.addEventListener('click', function(){
   inputEl.value = parseFloat(inputEl.value) / 100
})

clearEl.addEventListener('click', function(){
    inputEl.value= " "
})
equalEl.addEventListener('click', function(){
    try {        inputEl.value = eval(inputEl.value)
    } 
    catch (error) {
        inputEl.value = "Error"
    }  
})