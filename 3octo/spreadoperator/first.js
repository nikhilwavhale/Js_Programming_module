// Rest param and spread operator for the array 
const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]

const newarrcon=arr1.concat(arr2) //concat
console.log(newarrcon);

// defining more than one spread operator in one array is we can say this is Rest param
const newarr=[...arr1,...arr2]

// spread operator for object
const userintro={
    username:'rajiv',
    userid:1234,

}
// shalow copy 
const updateuser={...userintro}
console.log(updateuser);

