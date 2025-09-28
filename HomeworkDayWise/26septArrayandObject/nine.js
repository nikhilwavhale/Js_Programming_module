// E) 
let users = [
  { id: 1, profile: { name: "Amit", age: 25 } },
  { id: 2, profile: { name: "Sneha", age: 28 } }
];

// TODO: Create a shallow copy and a deep copy of users.
// In shallow copy → change age of first user.
// In deep copy → change name of second user.
// Observe which changes affect original array.

const shallowcopy=[...users] 
// console.log(shallowcopy); 

shallowcopy[0].profile.age=23 
console.log(shallowcopy);
console.log(users);

const deepCopy=structuredClone(shallowcopy)

deepCopy[0].profile.name='aman'
console.log(deepCopy);
console.log(users);

