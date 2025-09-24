function greetings(name)
{
    return function calleded(name)
    {
        console.log(`Hello ${name}`);
    }
}

let result=greetings();
console.log(result('It View')); 
