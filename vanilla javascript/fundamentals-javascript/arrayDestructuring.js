/**
 * Destructuring assignment is a special syntax which allows to unpack arrays/objects to a bunch of variables
 * It works great with complex functions that have a lot of paramters
 * 
 */


//Array destructuring

let arr = ["Harvey","Specter","Pearson","Hardman","Specter"]
//this destructures the array into two variables 
//arr[0] is now firstName
//arr[1] is now lastName
let[firstName,lastName] = arr;

console.log(firstName);
console.log(lastName);


//Can ignore elements using extra commas

let[,,firmFirst,,firmSecond] = arr;
console.log(firmFirst);
console.log(firmSecond);

//Assign to anything on left side

let user={};
[user.name,user.job] = "Pete Librarian".split(' ');
console.log(user.name);
console.log(user.job);

//Copying values to rest of array

let [greeting,...intro] = ["Hello","I'm","Javascript"]
//puts Hello in greeting
console.log(greeting);
//and copies the other two elements into intro using the spread operator
console.log(intro);

//Using default values

let[a=1,b=2] = [4];
console.log(a); //puts 4 in a 
console.log(b); // b doesn't have a value so it takes default 2 as it's value 

//Swapping 

let c=3;
let d=4;
//values of c and d are swapped using destructuring
[c,d] = [d,c];

console.log(c);
console.log(d);