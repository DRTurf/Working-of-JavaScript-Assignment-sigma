multiplyNumbers(4,5); //ReferenceError: Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function(num1,num2){
    console.log(num1*num2);
}