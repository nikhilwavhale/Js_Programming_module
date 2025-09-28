/*B. 
let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];

Q1: Add "Suresh" at the end and "Meena" at the beginning.
Q2: Remove the first and last student.
Q3: Extract ["Raj", "Pooja"] using slice().
Q4: Replace "Raj" with "Rohan" using splice().
Q5: Merge this array with ["Anita", "Vivek"] using spread operator.
Print results after each step. */

let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];

// Q1: Add "Suresh" at the end and "Meena" at the beginning.
console.log(students.push('Suresh'),students.unshift('Meena'));
console.log(students);

// Q2: Remove the first and last student.
console.log(students.pop('Suresh'),students.shift('Meena'));
console.log(students);

// Q3: Extract ["Raj", "Pooja"] using slice().
console.log(students.slice(2,4));

// Q4: Replace "Raj" with "Rohan" using splice().
console.log(students[2]='Rohan');
console.log(students);

// Q5: Merge this array with ["Anita", "Vivek"] using spread operator.

let stu2=["anita","vivek"];

console.log(students.concat(stu2));




