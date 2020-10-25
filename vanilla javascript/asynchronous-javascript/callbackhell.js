/*
Callback hell
When we have callback inside of callback inside of callback like the our code goes on like a pyramid 
it's called as callback hell. It makes our code really messy as we have to proceed on calling back functions inside each one and so on.
This is found in cases of async operations where we have to wait for response to be provided by the server and then to proceed to next function with the obtained value.
As each function takes time to be executed, the callbacks become hell as mentioned and not an ideal solution to be utilised.
*/

//in this recipe example there are 3 setTimeouts called within each other 
//it can be observed as a mock up to getting a response from the server 
//as we are calling the timeouts inside of each callback again and again it results in callback hell
function getRecipe() {
    //firsttime out called 
    setTimeout(()=>{
        const recipeID = [23,45,87,55];
        console.log(recipeID);

        //second time out called 
        setTimeout((id)=>{
            const recipe = {title : 'Chicken Biryani',style:'Hyderabadi'};
            console.log(`recipe is ${id} : ${recipe.title}`)

            //third time out called 
            setTimeout((style)=>{
                const recipe2 = {title : 'Mutton Biryani',style:'Hyderabadi'};
                console.log(recipe2);
            },1500,recipe.style)

        },1500,recipeID[2]);

    },1500)
}

getRecipe();