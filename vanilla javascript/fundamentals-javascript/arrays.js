/**
 Arrays 
 */

//Declaration

//let arr = new Array();
//let arr = [];

arr = [1,2,3,4]

console.log(arr.length);

//An array in js can store elements of any type

let arr1 = [1,'Js',{year:2013},true,function(){console.log("Hi")}]
//Accessing elements in array
console.log(arr1[1]); //accesses 'Js'
console.log(arr1[2].year); //access object
console.log(arr1[4]()); //calls the function


//Methods in array
//At end of the array
//array_name.pop() -> extracts the last element of the array and returns it
//array_name.push() -> appends the element to the end of array

console.log(arr.pop());
arr.push(5)
console.log(arr);

//At the beginning of array

//array_name.shift() -> extracts the first element of array and returns it
//array_name.unshift() -> adds the element to the beginning of array

console.log(arr.shift());
arr.unshift(6);
console.log(arr);


/**
 * An array is a special kind of object,where accessing elements is like object[key]
 * We can assign properties to arrays in Js as they are much like objects at base
 * 
 */

let fruits = ["Apple", "Orange", "Plum"];
//iterating over the array
//for ..of doesn't give access to the current element's index number
//only the value
for(let fruit of fruits){
    console.log(fruit);
}

//toString 

let arrs = [1,2,3]

console.log(arrs);

console.log(String(arrs));





