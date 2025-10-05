const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]

const newarrcon=[...arr1,...arr2]

function add(...num1) // num1 is rest parameter , and take all arguments value add in one array
{
    console.log(num1);
    return num1.reduce((sum,cele)=> // reduce is return sum of all the rest param
    {
        return sum=sum+cele
    },0)
}

let result=add(...newarrcon,12,34)
console.log(result);