/*
THIS
if we are inside a object scope or global scope this refers to the scope within which it lies
*/
'use strict'
//this in global scope

//this here means the global scope
this.table = 'window table';
//here we can access it as this.table or window.table as 'this' will refer to the window in global scope
console.log(this.table);

this.garage = {
    table : 'garage table',

};


let johnsRoom = {
    table : 'johns table',
};
//again this is in global scope and accesses the public property this.garage as we access this.garage we get 'garage table'
console.log(this.garage.table);

/*
//this inside an object
let johnsRoom = {
    table : 'johns table'
};

//this is not possible and it will be unaccessable as it is a private property 
//console.log(this.johnsRoom.table);
//so we have to access it by it's name
console.log(johnsRoom.table);
*/


//this inside a method

/*

let johnsRoom = {
    table : 'johns table',
    cleanTable() {
        //this here will access the table in object johnsRoom
        console.log(`cleaning ${this.table}`);
    }
};
*/

//it will show as cleaning john's table
//johnsRoom.cleanTable();
//here it will call the cleanTable method inside this.garage and it's 'this.table' wil point to it's table prop
//this.garage.cleanTable();


//this inside a function
/*
const cleanTable = function(){
    //now this will access the global scope and print cleaning window table 
    //it doesn't know what this is and it uses global scope but it should not happen
    console.log(`cleaning ${this.table}`);
}

cleanTable();
*/

//using call function
/*
const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}
//using call we specify the way of using somebody's method on someothers object
//here on each call we specify the object or the scope through which we call the cleanTable so that this.table uses the value within that scope

cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsRoom,'some soap');
*/

//this inside inner function
//inner function cannot access the scope again so calling the inner function using  .call might be a good idea
//we can use arrow functions so it takes the outer scope 'this' and access becomes valid
const cleanTable = function(soap){
    const innerFunction = function(_soap){
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction.call(this,soap);
}

/*
cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsRoom,'some soap');
*/

//this inside a constructor
/*
let createRoom = function(name){
    this.table = `${name}'s table`
};

const jillsRoom = new createRoom('jill');

cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsRoom,'some soap');
cleanTable.call(jillsRoom,'some soap');
*/

//this inside class

class createRoom {
    constructor(name){
        this.table = `${name}'s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
    
}

const jillsRoom = new createRoom('jill');

cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsRoom,'some soap');
cleanTable.call(jillsRoom,'some soap');