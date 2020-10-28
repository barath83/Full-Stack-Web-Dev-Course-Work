/*
 Every object has it's own properties and methods that it can access on
 Call,apply,bind allows to access methods that are not it's very own but still can access the method's in that way

 */
console.log("Call")
 // obj here doesn't have method addToThis, it has only the num property 
 var obj = {
     num : 2,
 };
 
 //this function is not a part of the object,but still inside we are using this.num referring to obj
 var addToThis = function(a,b,c) {
    return this.num+a+b+c;
 };
 
 //.call can be used to allow the obj to access the method and use it's property inside
 //as per the syntax given if we pass the object we want to use then we can use the this.num to access the property of the object inside the function
 //so the function addToThis was called for obj this.num is 2 and we pass 3 so the output is 5
 //we can also multiple arguments in the function and we can pass them but the first argument should always be the object on which we call
 console.log(addToThis.call(obj,1,2,3)); //functionname.call(objectname,functionargumenets)

 console.log("Apply")
 /* Apply is similar to call an does the same thing as call but when we have to pass a list of arguments - multiple
    we can pass an array using apply
 */
 var arr = [1,2,3]
 console.log(addToThis.apply(obj,arr));  ////functionname.apply(objectname,arrayofvalues)

 console.log("Bind")
 /*
     .bind() , on the object which we call will bind the function to that object and it will return that function
     so we have to store the return value in a variable and then call that variable which stores the function to execute the function
     we can pass in argument values to that variable
 */
 var bounded = addToThis.bind(obj);  // var someName = functionname.bind(objectname) //returns a function
 
 //this will op 8 as this.num will take it's value from obj that we bounded the function to and we pass 1,2,3 to add with that
 console.log(bounded(1,2,3));