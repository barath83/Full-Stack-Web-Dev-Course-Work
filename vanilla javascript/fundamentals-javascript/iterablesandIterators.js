/**
 * Iterables and Iterators 
    In javascript objects that can be iterated means that they can be looped through 
 */


let num = [1,2,3,4,5]

//here in the list of prototype functions possible 
//since it's an array it would have a prototype of Symbol.iterator
console.dir(num);

let anObj = { 
    name : 'Bob', 
    age : 20,
    friends : ['John','Tim','Tom'],
    getName  :function(){
        return this.name;
    }
}
//since this is an object it wouldn't have the same prototype Symbol.iterator so this isn't iterable
console.dir(anObj)

//Symbol.iterator allows us to use a new variant of for loop for..of
//Symbol.iterator is only available for iterable objects

//We cannot use for..of for objects
//we can use for..in in objects

//prints all the 'keys' in anObj
for(let key in anObj){
    console.log(key);
}


//Iterators

let myArray = [1,2,3,4,5]

//calling the function on right side would return back an iterator function to the variable on left side
//we can call an next function on iterator variable now
let iterator = myArray[Symbol.iterator]();

//it gives the first value and there is 'done' which would be false as we still have elements 
// the next function continuously called on the iterator object will run with done as 'false' until it stays within limit
// it becomes true once the limit is reached 
console.log(iterator.next()) // v : 1 done : false
console.log(iterator.next()) // v : 2 ""   ""  ""
console.log(iterator.next()) // v : 3 
console.log(iterator.next()) // v : 4
console.log(iterator.next()) // v : 5 done : false
console.log(iterator.next()) // v : undefined done : true


//Array.from
// It takes an iterable pr array-like value and makes a 'real' Array from it 

let arrayLike = {
    0 : 'a',
    1 : 'b',
    length : 2
}

let arr = Array.from(arrayLike);
//console.log(arr);

//Array.from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.

for(let x of arr){
    console.log(x);
}