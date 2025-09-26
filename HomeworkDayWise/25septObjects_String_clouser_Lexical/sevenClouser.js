/*Closure

Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
The inner function should access both the parameter of outerFunction and a variable declared within
outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
variables even after outerFunction has finished executing. */

function outerFunction(n)
{
    let n1=n
    return innnerFunction=(n2) =>
    {
        let mul=n1+n2
        console.log(mul);
    }
    
}
let res=outerFunction('Hello')
console.log(res(' It View'));   