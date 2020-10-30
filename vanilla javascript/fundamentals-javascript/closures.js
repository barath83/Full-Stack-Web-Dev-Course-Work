/*
ANYTHING DECLARED OUTSIDE IS AUTOMATICALLY AVAILABLE INSIDE - lexical scoping
How does this work, the answer is closure
*/

/*var passed = 3;

var addTo = function() {
    var inner = 2;
    return passed+inner;
}*/

/* This is going to add 3+2 and return 5 
   Even though we didn't pass any parameter to the function due to above mentioned lexical scoping it takes 3 for passed var and add its
   This is possible because of closures
   Closures are functions with preserved data
   It is a function having access to the parent scope even after the parent function has closed
*/
//console.log(addTo())


var addTo = function(passed){

    var add = function(inner){
        return passed+inner;
    };

    return add;
}

//this would preserve the value 3 passed as a closure
//console.dir(addTo(3));

var addThree = new addTo(3);
var addFour = new addTo(4);

/**
 * Here we could have add any number of functions with different values passed 
 * Because of closures will remain preserved and we can then use the inner function to manipulate the preserved value
 * The values are preserved as property of the functions this is possible because of closure
 */
console.log(addThree(1));
console.log(addFour(1));