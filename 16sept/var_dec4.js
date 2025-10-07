var a=10
console.log(a);//10

function display()
{
    console.log(a); // undefined ( cause hoisting )
    var a=20
    console.log(a); //20 
}

display()
console.log(a); // 10