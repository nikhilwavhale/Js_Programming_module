var a=10  // global scope  
console.log(a); // 10 
a=20
function display()
{
    // a=20
    console.log(a); //20
}

display()
console.log(a); //20