let arr=[14,10,4,8,20,2,12,3]

console.log(arr);

// it not allow to break and continue keyword, it return true or false value if the anyone of the element is  in array satisfy the callback function first time then they return true otherwise check for every element and return false 
let res=arr.some((num)=>{
    return num>15
})

console.log(res);

