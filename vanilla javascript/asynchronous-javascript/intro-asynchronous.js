/*
Asynchronous javascript
- asynchronous functions run in the background 
- the program execution doesn't wait for the asynchronous function to be completed
- instead it goes on executing the remainder of the code as the asynchronous function works in background 
- it moves on immediately non-blocking
*/

//Synchronous vs asynchronous
//Example of synchronous js
console.log("Synchronous example")
const secondsync = () => {
    console.log("I'm the second function,I'm done executing"),
}

const firstsync = () => {
    console.log("I'm the first function to be executed,I'm done")
    secondsync();
}

firstsync();

//Example of asynchronous js
console.log("Asynchronous example")
const secondasync = () => {
    setTimeout(()=>{
        console.log("I'm inside the timeout function I will be executed after 2s at last.")
    },2000)
}

const firstasync = () => {
    console.log("I'm the first function to be executed,I'm done")
    secondasync();
    console.log("I'm used after calling secondasync, I will be printed as the second line")
}

firstasync();