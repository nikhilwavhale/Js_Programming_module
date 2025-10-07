var a=10

console.log('a',a); //10
a=20
console.log('a',a); //20
function display()
{
    console.log('a',a); // undefined (hoisting)
    var a=30
    console.log('a',a); //30
}

display()
console.log('a',a); //20