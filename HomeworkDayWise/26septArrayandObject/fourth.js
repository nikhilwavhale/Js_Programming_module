/*D. Classroom Manager
let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];

1. Add "Suresh" at the end and "Meena" at the beginning.
2. Remove the first and last student.
3. Replace "Raj" with "Rohan" using splice().
4. Check if "Pooja" exists → if yes, remove her using indexOf().
5. Extract ["Neha", "Rohan"] into a new array.
6. Merge with another array ["Anita", "Vivek", "Kiran"] using spread.
7. Final challenge: Create a deep clone of the final array using spread + slice, modify one element, and prove that original array is not affected.
 */

// 1. Add "Suresh" at the end and "Meena" at the beginning.
let students = ["Amit", "Neha", "Raj", "Pooja", "Kiran"];
console.log(students.push('suresh'),students.unshift('meena'));
console.log(students);

// 2. Remove the first and last student.
console.log(students.pop(),students.shift());
console.log(students);

// 3. Replace "Raj" with "Rohan" using splice().
console.log(students.splice(2,-2,'rohan'));
console.log(students);

// 4. Check if "Pooja" exists → if yes, remove her using indexOf().

// 5. Extract ["Neha", "Rohan"] into a new array.
console.log(students.splice(1,2));
console.log(students);

// 6. Merge with another array ["Anita", "Vivek", "Kiran"] using spread.
let array=["Anita", "Vivek", "Kiran",...students]
console.log(array);


// 7. Final challenge: Create a deep clone of the final array using spread + slice, modify one element, and prove that original array is not affected.

const deepcopy=structuredClone(array)

deepcopy.splice(0,1,'nikita')
console.log(deepcopy);

console.log(array);