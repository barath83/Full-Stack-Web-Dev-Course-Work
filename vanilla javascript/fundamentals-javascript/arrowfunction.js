/*
Arrow function introduced in E6 is basically a anonymous(can be unnamed) function,it came with the shortest and easiest way to write a function.
We can use a single line arrow function to pass values to it and also return a value
*/

//Finding square of a number with normal function

var square = function(num){
    return num*num
}
console.log("Squaring a number using normal function");
console.log(square(5));

//Finding square of a number with arrow function

var squareArrow = num => num*num;

console.log("Squaring a number using arrow function");
console.log(squareArrow(6));

/* 

 - Since the function body is a one liner we need not use curly braces and return statement as it will return the value automatically
 - Since we have only one parameter we need not enclose it in (), if we have more than parameters or non we need to use the ()

  The more readable syntax of arrow function would be 
  var squareArrow = (num) => {
    return num*num;
  }

*/

/*

//Values passed to a function cannot be accessed by using the arguments in arrow function 
console.log("Difference btw normal and arrow functions in using the arguments object")

function add() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
}
  
add(1,2,3,4,5); 


const adda = () => {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
};
//Executing this will return a error as we cannot use arguments in arrow function
adda(1,2,3,4,5);

*/

//The main difference between normal function and arrow function is regarding the this keyword

//ES5
/*
var obj = {
    id : 3,
    timer : function timer(){
        setTimeout(function(){
            console.log(this);
            console.log(this.id);
        },1000);
    }
}

obj.timer();
*/

// 'this' here within this function returns the parent of function scope which is the window object

//ES6

var obja = {
    id : 3,
    timer : function timer(){
        setTimeout(() => {
            console.log(this);
            console.log(this.id);
        },1000);
    }
}
obja.timer();


//this here will return the obja so the output will be this scope and the id value defined within scope

/*
Summary
They have shorter syntax than regular functions and could be one line function 
They could be anonymous and have implicit return statements 
“this” scope remains within the method declared in when arrow functions used as inner functions 
Arguments object not available in an arrow function
*/