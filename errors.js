try{


// syntaxError
// const x=10

// referenceError
// console.log(y)

// typeError
// null.toUpperCase();

// rangeError
// const arr = new Array(Infinity);

// customError
// throw new Error ("This is a custom error");
}
catch(error){
    console.log(`caught and error : ${error.message}`);
};