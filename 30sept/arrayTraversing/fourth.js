let salary=[20,10,5,4,32]

let res=salary.forEach(function(num,index) // <-- its never stop it goes to end and then it will break this not allow to use continue or break keyword use inside of function and it return undefined
{
    console.log(`index ${index}=${num*2.5}`);  // ${} templet literals 
    return
})

console.log(salary); // it does not affect original array 