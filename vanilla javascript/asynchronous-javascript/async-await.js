/*
Async/await
Async:
The word async before the function means that the function will always return a promise,other values are wrapped in the resolved promise automatically

Await:
The word await works only inside async functions, it makes javascript wait until the promise settle and returns its result

The function execution will pause and wait till the function after await is executed which is basically a promise
once it's done then the execution proceeds onto the next.

*/



async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas Schmedtmann');
    console.log(related);

    return recipe;
}

//here we get the recipes using the .then method as the promise is resolved and it can be consumed in .then()
getRecipesAW().then(result => console.log(`${result} is the best ever!`));