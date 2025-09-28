/*C. To do List Manager 
Start with an empty array todoList = []
1. Add 5 tasks using push().
2. Remove the last task using pop().
3. Add a "Morning Exercise" task at the beginning using unshift().
4. Remove the first task using shift().
5. Replace the 3rd task with "Doctor Appointment" using splice().
6. Extract the first 3 tasks into a new array using slice().
7. Merge the final list with ["Buy Groceries", "Pay Bills"] using spread.
Print the array after each operation.*/

let todoList = [];

// 1. Add 5 tasks using push().
console.log(todoList.push('reading','writing','Coding','playing games','homework')); //5 
console.log(todoList); 

// 2. Remove the last task using pop().
console.log(todoList.pop());
console.log(todoList);

// 3. Add a "Morning Exercise" task at the beginning using unshift().
console.log(todoList.unshift('morning exercise'));
console.log(todoList);

// 4. Remove the first task using shift().
console.log(todoList.shift());
console.log(todoList);

// 5. Replace the 3rd task with "Doctor Appointment" using splice().
console.log(todoList.splice(3,3,'doctor appoinment'));
console.log(todoList);

// 6. Extract the first 3 tasks into a new array using slice().
console.log(todoList.splice(0,3));

//7. Merge the final list with ["Buy Groceries", "Pay Bills"] using spread.
// Print the array after each operation.

let newarr=["Buy Groceries", "Pay Bills",...todoList];
console.log(newarr);
