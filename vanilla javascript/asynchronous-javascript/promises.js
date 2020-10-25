/*
Promise

- object that keep tracks if a event has already happened or not 
- determines what happens after the event has happened
- implements the concept of future value that we are expecting

States of Promise 

Pending ---event happens---> settled/resolved --> fulfilled or rejected

*/

//we produce or create a new Promise object
//the getIDs promise object will have two methods resolve and reject they are passed as callback functions to Promise
/*
resolve will be called back if the promise is fulfilled
reject will be called back if the promise is not fulfilled or if it encounters a error or rejected 
Here in this case setTimeout will always be fulfilled as it's just a timer for 1.5s and the resolve will be called back
.then method takes in the argument passed from resolve during it's callback and it prints 
if there are any errors .catch will catch them we can callback reject for errors and it's arguments will used .catch
*/


const getIDs = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([23,45,87,55]);
        //reject('Could not get the values');
    },1500);
});

const getRecipe = (recipeID) => {
    return new Promise((resolve,reject) => {
        setTimeout((id) =>{
            const recipe = {title : 'Chicken Biryani',style:'Hyderabadi'};
            resolve(`recipe is ${id} : ${recipe.title}`)
        },1500,recipeID)
        
    });
};

const getRelated = style => {
    return new Promise((resolve,reject) => {
        setTimeout(sty => {
            const recipe2 = {title : 'Mutton Biryani',style:'Hyderabadi'};
            resolve(recipe2);
        },1500,style);
    })
};

//right here we are consuming our promises using .then and .catch based on their state
getIDs
.then(IDs => {
    //from the first promise we get the list of ID's as it is resolved
    console.log(IDs);
    //we callback getRecipe function with a particular ID which again returns a new promise
    return getRecipe(IDs[2]);
})
//the returned promise's resolve callback can be consumed by chaining a .then at the end of first promise's .then
//in this .then we get the recipe of the particular ID passed to getRecipe
.then(recipe => {
    console.log(recipe);
    //to the getRelated we pass the recipe's style and it inturn returns the final promise
    return getRelated(recipe.style);
})
//finallt in the third.then the chaining continues as we get the similar styled recipe
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log(error);
});

