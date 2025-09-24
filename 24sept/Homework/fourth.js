function calculate(a,b,callback1)
{
    return callback1(a,b)
}

function add(n1,n2)
{
    return n1+n2
}

function mul(n1,n2)
{
     return n1*n2
}


console.log(calculate(3,2,add)); //5
console.log(calculate(3,2,mul)); //6