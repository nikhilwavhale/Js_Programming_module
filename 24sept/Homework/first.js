function multipleby(n)
{
    return function (value) 
    {
        return Value*n;
    }
}

let result=multipleby(5);
console.log(result(2));