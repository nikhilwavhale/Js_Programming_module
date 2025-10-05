let arr=[14,10,4,8,20,2,12,3]

// check the odd number is present or not 
let res1=arr.some((num)=>{
    return num%2!=0
})

console.log(res1);