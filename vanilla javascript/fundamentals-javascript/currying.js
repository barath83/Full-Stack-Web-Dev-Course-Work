/**
  Currying in js is done using closures
  It is a technique of evaluating a function with multiple arguments into sequence of functions with single arguments

  Uses:
    - It helps to avoid passing same variable again and again
 */

/* var add = function(a) {
     return function(b){
         return a+b;
     }
 };

 var addToFive = add(5);

 console.log(addToFive(1));

 */

 var avg = function(...n){
     let tot=0;
     for(let i=0;i<n.length;i+=1){
         tot+=n[i];
     }
     return tot/n.length;
 }

 var spiceUp = function(fn,...n){
     return function(...m){

        return fn.apply(this,n.concat(m));
     }
 }

 var doAvg = spiceUp(avg,1,2,3);
 console.log(doAvg(4,5,6));