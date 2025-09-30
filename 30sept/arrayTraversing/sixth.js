let salary=[20,10,5,4,32]
// multiply each element in array and multiply with 2.5 and return 
let res=salary.map(num => num*2.5)  // <-- map function 

console.log(res); // its create a new array  and store the result of return value of callback function
console.log(salary); // dont affect on original array ele 

