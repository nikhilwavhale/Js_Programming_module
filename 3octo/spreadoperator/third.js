const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]

const newarrcon=[...arr1,...arr2]

function add() // default param <=== is present
{
    console.log(arguments);
    let sum=0
    for(let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i]
    }
    return sum
}
// Passing multiple arr as a var this is ES6 Feature in javascript
let result=add(...newarrcon)
console.log(result);