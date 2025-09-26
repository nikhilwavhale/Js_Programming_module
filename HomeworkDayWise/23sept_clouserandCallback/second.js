/* write a function greetings that takes a name as parameter and return another function 
when return function is called , it should print :-hello yourname*/
function greetings(name)
{
    return function calleded(name)
    {
        console.log(`Hello ${name}`);
    }
}

let result=greetings();
console.log(result('It View')); 
