// One
const regularFunction = function(param){
    return param*2;
}
const arrowFunction = (param) =>{
    return param*2;
}

// Two

const regularFunction  = function(param){
    return param*2;
}

const arrowFunction=(param) => param*2;

// Three

const numbers = [1,2,3,4,5];
const squareNum = numbers.map(function(number){
    return number**2;
});
const arrowSquareNumbers = numbers.map((number)=> number**2);