
/* Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
 the arrow function to calculate the square of a given number and display the result.*/

let square=(n1) =>
{
    return n1*n1
}

console.log(square(5)); // square of arrow function 


/* Q2. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.*/

( square= (n) =>
{
    console.log(n*n);
})(4)


/*Q3. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.*/

