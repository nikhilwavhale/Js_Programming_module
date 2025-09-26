// write a function multiple(n) that returns a function 
function multipleby(n)
{
    return function (value) 
    {
        return value*n;
    }
}

let result=multipleby(5);
console.log(result(2));