// A.
let employees = [
  { id: 1, profile: { name: "Amit", dept: "HR" } },
  { id: 2, profile: { name: "Neha", dept: "IT" } },
  { id: 3, profile: { name: "Raj", dept: "Finance" } }
];


// 1. Add a new employee {id:4, profile:{name:"Pooja", dept:"IT"}} using push().
// employees.push({id:4, profile:{name:"Pooja", dept:"IT"}})
// console.log(employees);

// 2. Remove the first employee using shift().
// console.log(employees.shift());
// console.log(employees);

// 3. Check if any employee belongs to "Finance" using filter() + includes().

// let financeemp=employees.some(employee=>employee.dept==='Finance')
// console.log(financeemp);

// 4. Make a shallow copy of employees and change Neha’s dept to "Admin".
//    → Does it affect original? Why?

// const shallowcopy=[...employees]
// employees[0].profile.dept='Admin'
// console.log(shallowcopy);
// console.log(employees);  // it affects originaly because change appears on both they both share a reference to that same nested object in memory

// 5. Make a deep copy of employees and remove Raj from the deep copy.
//    → Verify original is safe.

const deepCopy=structuredClone(employees)
console.log(deepCopy.pop());
console.log(deepCopy);
console.log(employees); // original employees is safe cause deepcopy make independent clone 

// 6. Use slice() to copy first two employees into a new array.
console.log(deepCopy.slice(0,3));

// 7. Merge with another list [{id:5, profile:{name:"Sneha", dept:"HR"}}] using spread.

let newlist=[{id:5, profile:{name:"Sneha", dept:"HR"}},...deepCopy]
console.log(newlist);