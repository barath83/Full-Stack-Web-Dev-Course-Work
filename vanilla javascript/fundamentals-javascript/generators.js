/**
 * Generators
    Regular functions returns only one single value or nothing.
    It can also yield multiple values one after another,they work with iterators to provide stream of data.
    It behaves differently from a normal function,when called it doesn't execute it's code fully instead it returns a special object called generator object 
    For each time when it is executed it returns the nearest yield value like a next in iterator
    The value there now becomes the yield value and 'done' follows the same 
    Generators are iterables
 */

// generator function should have a * before the function name so it is understood as generator function

function *generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generator();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//Here we have a generator function which contains infinite loop inside it but still it doesn't produce stack overflow error
//because each time when iteratorone.next() is called yield value is incremented by one, it doesn't run on infinite loop for the first call itself
//but it returns a new yield value for each .next() call the last nearest value is returned
//in this function the value will never become undefined and the loop will never turn out to be done : true


function *infiniteMaker() {
    let i =0;
    while(true){
        yield i;
        i++;
    }
}

let iteratorone = infiniteMaker();

console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());
console.log(iteratorone.next());


