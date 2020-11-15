/**
 * Spread operator - it spreads on demand
 */

// ... spread is used when we don't explicitly know the number of arguments that a function is going to take in
// we cannot just have like
/**
 var x = function(){

    console.log(arguments);
};

x(1,2,3,4,5,6);

In this the values will still be passed but the output by arguments won't be an exact array
We have to then convert the argument object into array
 */
var x = function(...n){

    console.log(n);
};

x(1,2,3,4,5,6);

//Here we can a,b,c as the first three sure known parameters and the rest can be unknown
//to handle the unknown parameters we can use spread ...n
// the parameters in which the spread operators are use are rest parameters
var y = function(a,b,c,...n){

    console.log(n);
};

y(1,2,3,4,5,6);

