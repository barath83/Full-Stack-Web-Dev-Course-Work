/*
Callback functions 

- the first thing to know is that functions are first-class objects in js 
- we can work with them the same way we work with objects \
- we can assign them to variables and pass them as arguments to other functions

Now coming to call-back functions, it is a function that is passed to another function as 
an argument so that it can be used inside that function later. A function which accepts other functions 
as arguments is called higher order functions.
*/


//add is a function that receives two values and returns it's sum value
let add = function(a,b){
    return a+b;
};

//multiply is a function that receives two values and returns it's product value
let multiply = function(a,b){
    return a*b;
};

//calc is a function that receives two numbers and a function which is named as 'callback'
let calc = function(num1,num2,callback){
    //now we call the function named as callback which can either be add or multiply 
    //so calc function is high order function that accepts a function as it's parameter
    //and now it call the function that is being passed to it
    return callback(num1,num2);
};

//here we pass two numbers and multiply function to the calc function 
//multiply is a function passed as an argument and it will be received as an callback function and executed inside calc depending on it's logic
  
console.log(calc(2,3,multiply))