/*A.You are given an array of people's ages. 
let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48]
After following each step print the result to the console.
Step 1: Add a person’s age at the end of the array. He is 19 years old.
Step 2: Add another person’s age at the start of the array. She is 22 years old.
Step 3: Replace the age of the person on index 3 with 17.
Step 4: Sort the array in ascending order.
Step 5: Change it in descending order but do not use the sort method again.
Step 6: Now remove the oldest person and the youngest person from the array.
Step 7: Check if the person you added who was 19 years old still exists in the array or not and if he does then also check what his age index is now and 
print it on the console.*/


let ages =[83, 26, 32, 13, 23, 3, 36, 28, 64, 48];

// Step 1: Add a person’s age at the end of the array. He is 19 years old.
console.log(ages.push(19));
console.log(ages);

// Step 2: Add another person’s age at the start of the array. She is 22 years old.
console.log(ages.unshift(22));
console.log(ages); 

// Step 3: Replace the age of the person on index 3 with 17.
console.log(ages[3]=17);
console.log(ages);

// Step 4: Sort the array in ascending order.
console.log(ages.sort());

// Step 5: Change it in descending order but do not use the sort method again.
console.log(ages.reverse());

// Step 6: Now remove the oldest person and the youngest person from the array.
console.log(ages.shift());
console.log(ages.pop());
console.log(ages);

// Step 7: Check if the person you added who was 19 years old still exists in the array or not and if he does then also check what his age index is now and 
// print it on the console.

console.log(ages.includes(19)); // true 
console.log(ages.indexOf(19));
console.log(ages);
