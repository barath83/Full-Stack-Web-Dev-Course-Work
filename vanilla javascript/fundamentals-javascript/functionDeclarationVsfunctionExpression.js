
//Function declaration syntax
//normal way of declaring and calling a function
function sayHello() {
    console.log("Hi Hello");
}

sayHello()

//Function expression syntax
//here the function is created and assigned to variable explicitly like any other value
//it means create a function and put it in variable hello
const hello = function () {
    console.log("Hello");
};
//we have to call the function by using () brackets again with the variable's name
hello()

/*
Semicolon is used at the end of function expression as it's not a code block
like if or something but rather an assignment so ';' is used
*/


/* Key differences

- Function declaration - a function declared as a seperate statement in main code flow
function sum(a, b) {
  return a + b;
}

- Function exp : a function created inside an expression or inside another construct
let sum = function(a, b) {
  return a + b;
};

- A Function Expression is created when the execution reaches it and is usable only from that moment.

-A Function Declaration can be called earlier than it is defined.

*/