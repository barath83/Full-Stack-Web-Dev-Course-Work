/**
 Immediately Invoked Function Expressions
 When a function has to be executed right away and it is not required to be called again IIFE can be used
 */

// Normal function
// This works when we have to call the function again and again here our variables are safe that they are immutable so the variables can't be accessed

function addTogether() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log('Normal function call executed')
    console.log(answer);
}
//here we have to call the function
addTogether();

//We have to make it as an function expression,which will be like anonymous function it need not have a name
//cause in an IIFE once we quickly call a function we have no intention of calling it again so we don't need a name for it 
// we have to wrap the function within () the brackets
// we add a brackets at the end before semicolon to call the function
(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log('IIFE executed')
 console.log(answer);
 })();
