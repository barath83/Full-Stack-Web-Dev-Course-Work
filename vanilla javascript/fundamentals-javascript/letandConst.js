/*
 These two keywords provides block scope variable in javascript
 Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 
 - Global variables can be accessed from anywhere in a JavaScript program.
 - Variables declared Locally (inside a function) have Function Scope.
 */

 /*
  Block scope - variables declared with var keyword do not have block scope
              - variables declared with let keyword do  have block scope
  - Variables declared inside a block {} cannot be accessed from outside the block            
  */

  {
      var x = 1;
  }
  // x can be accessed out of scope here 
  //console.log(x);

  {
    let y = 1;
  }
  //y cannot be accessed out of scope here
  //console.log(y);

  //Redeclaring variables

    var x = 10;
    // Here x is 10
    {
    var x = 2;
    // Here x is 2
    }
    // Here x is 2

    
    var x = 10;
    // Here x is 10
    {
    let x = 2;
    // Here x is 2
    }
    // Here x is 10


    /*Loop scope
  
    var i = 5;
    for (var i = 0; i < 10; i++) {
    // some statements
    }
    // Here i is 10

    let i = 5;
    for (let i = 0; i < 10; i++) {
    // some statements
    }
    // Here i is 5
    */
    //Redeclaring a var again in any scope is allowed
    //redeclaring a var with let in same scope is not allowed
    //redeclaringa let with let in same scope is not allowed

    //Const behaves very similar to let but except they cannot be reassigned
     const pi = 3.14;
     console.log(pi);
     //pi = 3.14223; //this will thrown ar error as they cannot be reassigned again

     //const must be assigned a value when declared

     //Correct const PI = 3.14159265359;
     //Incorrect 
     //const PI;
     //PI= 3.14;

     //Constant objects properties can change

     const apple = {
         color : "green",
         type : "kashmiri",
         isRotten : "true"
     }

     apple.isRotten = "false";
     apple.color = "red";

     //but we cannot completely reassign the const apple itself to a new value
     //same goes for const arrays we can change the value of elements,add elements
     //but cannot reassign the array to a new array value
