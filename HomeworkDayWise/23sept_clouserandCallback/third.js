// write a function createCounter() that return a function , the returned function shoud return increment value of counter
function createCounter()
{
    let count=0;

    return function()
    {
        count++
        return count
    }
}

let result=createCounter();
console.log(result()); //1
console.log(result()); //2