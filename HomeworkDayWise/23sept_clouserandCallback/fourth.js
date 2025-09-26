// write a program where a function calculate takes two numbers and a callback function the calculate function should use the callback to perfrom different operaction like addition or multiplication depending on which 
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