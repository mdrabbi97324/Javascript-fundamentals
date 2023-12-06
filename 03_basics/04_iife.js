// Immediately Invoked Function Expression => IIFE

(function chai() {
    console.log('I am inside a function')
})();


((name) => {
    console.log(`My name is ${name}`)
})('Golam Rabbi');


(function(){
    var myVar = 'I am from inside the IIFE'
    console.log(myVar)
})();

// console.log(myVar) // myVar is not defined

var globalVar = 'I am a global variable';

(function() {
    var localVar = 'I am a local variable'
    console.log(globalVar)
})();

console.log(localVar) // localVar is not defined


