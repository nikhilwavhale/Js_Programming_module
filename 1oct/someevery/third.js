let arr=[14,10,4,8,23,2,12,3]

// if anyone element in array is not satisfy the condition , well it return false  
let res1=arr.every((num)=>{ 
  
    return num<15 // it is false cause in array one element val is 23, it wasn't satisfy the condition
})

console.log(res1);