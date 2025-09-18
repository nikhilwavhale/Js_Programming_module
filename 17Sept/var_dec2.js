var a=10 // global var 

console.log('a=',a); //10
console.log('a',a); //10
if(true)
{
    console.log('a',a);
    a=20
    console.log('a',a); //20
}
console.log('a',a); //20
