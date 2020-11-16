//Splice
// the splice method can do anything like insert,remove,replace elements

//Syntax : arr.splice(start[, deleteCount, elem1, ..., elemN])
// from index 'start' removes all the elements for 'deleteCount' times
// and then inserts elem1 .... till elemN at their place

let arr = [1,2,3,4]
arr.splice(1,2); // from index 1 remove 2 elements
console.log(arr); // prints [1,4]

let arr1 = [1,2,3,4,5]
arr1.splice(0,3,5,6); //removes from index 0 till index 3 i.e the first three elements and replaces them with 5 and 6
console.log(arr1); // prints [5,6,4,5]

let arr2 = [1,2,3,4]
arr2.splice(0,2) //just removes the first 2 elements and leaves it as it is 
console.log(arr2); // prints [3,4]

//the splice method can also insert elements 
//set deleteCount as 0 and give start index as the end of array

let arr3 = [1,2,3]
arr3.splice(3,0,5,6) //this will append 5,6 at the end of array i.e from index 
console.log(arr3); //prints [1,2,3,5,6]

//Negative indexing also allowed

let arr4 = [1,2,3,4]
arr4.splice(-1,0,3,4) //inserts the elements 3,4 at the end of array
console.log(arr4);


/**
 * Slice arr.slice()
 * Syntax - arr.slice(start,end)
 * it returns a new array by copying all the items from start till end indexes
 * both start and end can be negative assuming to be from the end of the array
 * it make sub-arrays
 */

 let arr5 = [1,2,3,4,5,6,7]
 let arr6 = arr5.slice(1,5) //it copies elements from indexes 1 till 5 and returns a new sub array
 console.log(arr6); //prints [2,3,4,5]

 /**
  * Concat - arr.concat 
  * creates a new array that includes values from other array and additional items
  * Syntax - arr.concat(arg1,arg2...)
  * It accepts any number of args either a array or a set of values
  */

  let arr7 = [1,2,3,4]
  console.log(arr7.concat([5,6])); //adds 5,6 to the end of array


 //Searching in a array
 
 let arr8 = [1,2,3,4,5,6]

 //indexOf - > looks for an item starting 'from' a index and returns the index ig found else -1
 //Syntax - indexOf(item,from)
 
 console.log(arr8.indexOf(5)); // returns 5
 console.log(arr8.indexOf(5,5)); //returns -1 as it is searching for five from index 5 but 5 is in index 4

 //includes -> looks for an item starting 'from' a index and returns true if found else false

 console.log(arr8.includes(5)); //returns true;
 console.log(arr8.includes(5,5)); //returns false;
 
 /**
  * find and findIndex
  * In a array of objects ,finding a object with specific condition
  * Syntax let res = arr.find(function(item,index,array){
  * // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  *  })
  */
   
 let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(item=> item.id==2); //this will run through the array of objects find the object with id as 2 
  console.log(user.name); // prints 'pete'

  /**
   * Filter
   * let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
   */

 let fewUsers = users.filter(item => item.id<3); //filters the array of objects for items with id less than 3 which is 2 in this case
 console.log(fewUsers);   //prints item 1 and 2

 //Transform an array

 /**
  * map
  * It calls an function for each element of the array and returns the array results
  * let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
  */

  let someNum = [2,3,4,5]
  let newNum = someNum.map(item => item+2); // adds all elements in array by 2 and returns a new array
  console.log(newNum);
 
 let newarr = [1,2,15]
 newarr.sort()
 console.log(newarr); // prints 1,15,2
 //the items are sorted as strings by default so it becomes 1,15,2 in lexographic order

 //We have to pass an extra comparison function to achieve normal integer sorting
 
 //reverses the array 
 newarr.reverse();
 console.log(newarr);

 //reduce
 /*
 Syntax
 //let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
//}, [initial]);
 - accumulator-the result of the previous function call,for the first time it will initial if it is provided
 - item 
 - index position
 - array

 As function is applied the result of the prev function call is passed to the next one as first argument

*/

//Sum of array

let sumArr = [1,2,3,4,5]

//currItem is the each element in the array
//sum adds on the value and adds each element in the array
//0 is initialized for the first time
let sum = sumArr.reduce((sum,currItem) => sum+currItem ,0);
console.log(sum);

//split 
//splits the string by a delimiter and turns it into a array

let str = 'this-is-a-long-word';

let strArr = str.split('-');
console.log(strArr); //prints['this','is','a','long','word']


//forEach is one of the several methods to loop through iterables-array
//forEach method passes an callback function for each element of the array
const numbers = [1,2,3,4,5]
 
// Current value in array - required parameter
// index - optional parameter
//array - the array to which the current element belongs - optional parameter

/*numbers.forEach(function(number){
  console.log(number); //prints numbers in the order 
});*/

//Arrow function representation
numbers.forEach(number => console.log(number));

//Sum of all values in array
let sumv = 0;
//calls the sumfunc for each element in numbers
numbers.forEach(sumfunc);
//adds each element in the numbers array
function sumfunc(number){
  sumv+=number;
}
console.log(sumv);