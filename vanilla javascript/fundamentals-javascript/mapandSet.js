//Map - a map is a collection of keyed data items

let map = new Map(); //creates a map
map.set(1,'A'); //stores the key with a value(key,value)
map.set(true,'boolvalues'); //stores boolean as key
map.set('a',1);  //stores sting as key

//map.get - returns the value by key,returns undefined if the key doesn't exist
console.log(map.get('a'));
console.log(map.get(1));

map.delete(true); //.delete() removes the value by given key
// .clear() clears the map 
// .size() returns the size of the array

//Map can also use objects as keys

let john = {
    name : "John"
};
let someMap = new Map();
someMap.set(john,123);
console.log(someMap.get(john));

//Iteration over Maps
//map.keys() - returns an iterable for keys
//map.values() - returns an iterable for values
//map.entries() - returns an iterable for entries
//maps also have a forEach method similar to arrays
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

//iterate over keys
for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

//iterate over values
for(let amount of recipeMap.values()){
    console.log(amount)
}

//iterate over [key,value] whole entries
for(let pair of recipeMap.entries()){
    console.log(pair)
}


//Set - a set is a collection of values without keys where each value occurs only once
//it avoids duplicates


let set = new Set();

let johni = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johni);
set.add(pete);
set.add(mary);
set.add(johni);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

//Iteration over set can be done usinf for..of / forEach
for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}