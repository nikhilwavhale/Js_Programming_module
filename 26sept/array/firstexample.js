// array 

let fruits=['mango','apple','grapes','watermelon']

console.log(fruits);

// 1. push : The push() method adds one or more elements to the end of an array.
console.log(fruits.push('papaya'));
console.log(fruits);

//2.pop : The pop() method removes the last element from an array.
console.log('pop element :'+fruits.pop()); 
console.log(fruits);

//3. unshift() :The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. 
console.log(fruits.unshift('sweatapple'));
console.log(fruits);

//4.shift() : The shift() method removes the first element from an array and returns that removed element. The length of the array is reduced by one.
console.log(fruits.shift());
console.log(fruits);







let myfruits=['muskmelon','banana','cherry']
console.log(myfruits);

let con=fruits.concat(myfruits)
console.log(con);  // concat function 



// 6. indexOf() :- return the index of element whichever we search in the array 
console.log(fruits);
console.log(fruits.indexOf('apple')); 
console.log(fruits.indexOf('muskmelon')); //-1

// 7.includes() ;- it check the if that ele is present or not inside the array 
console.log(fruits.includes('charry')); // true 

console.log(fruits);
console.log(myfruits);

// 8.sort : sort the array element 
console.log(fruits);
fruits.sort()
console.log(fruits); // ascending order

// 9. reverse : it shows the reverse aray and store in original array 
fruits.reverse()
console.log(fruits);

// 10.slice : take subarrray of particular size from the existing array 
console.log(fruits.slice(1,3)); 
console.log(fruits.slice(3));

// 11. splice : Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(fruits);
console.log(fruits.splice(0,3,'banana','cherry'));
console.log(fruits); 