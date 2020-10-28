/*
 var is function scoped the variable declared with 'var' is accessible only within the function 
 It doesn't follow block scope but function scope
 */

/*
//this will output y as it's available there

var x = function() {
    var y = 1;

    console.log(y);
}

x();

*/

/*
//this will throw an error referenceError stating that y is not defined as it's outside of the function where y is defined

var x = function() {
    var y = 1;
}
console.log(y);
x();
*/

/*

var x = function() {
    if(true) {
        var y = 1;
    }
    //this will output as var in js is function scoped and not block scoped
    //since we declared it inside the function it will be available outside the block
    
}

x();

In general the variables declared outside of a function will have scope inside the function as javascript follows lexical scoping
 
*/

var x = function() {

    //console.log(z); // this will throw a reference error as we don't have a z
    console.log(y); // it would print undefined as have value yet assigned to it but still we can print it before var y = 1 ;

    //even if dont't use var y before and assign value it will still print defined
    /*
        it is basically 
        var y; defined 
         y=1; assigned

         this is called hoisting
     */
    var y = 1;

}

x();


/*
JS only hoists declarations not initializations

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // Declaration
num = 6; // Initialization

console.log(num); // Throws ReferenceError exception 
num = 6; // Initialization

Declarations using let and const are also not hoisted. 
*/
