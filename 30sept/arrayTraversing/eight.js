let salary=[20,10,5,4,32]
// Find out sum and max and min ele from given array 


// let result=salary.reduce((sum,ele)=>{return sum=sum+ele},0)
let result=salary.reduce((max,ele)=>{return ele>max?ele:max})
console.log(result);