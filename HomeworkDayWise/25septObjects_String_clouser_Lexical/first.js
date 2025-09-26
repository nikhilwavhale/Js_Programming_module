// Homework Programming Statement object

/*Q1. Student Record (Object.freeze)

Create a student object with properties: name, rollNo, and grade.
Freeze the object using Object.freeze().
Try modifying the properties and adding a new one.
Observe whether the changes reflect. */

let student={
    rollno:1,
    Name:'sunil',
    grade:'A'
}

console.log(student);
Object.freeze(student) // do not allowed to perform any operaction on object 

// No allow to add, and modify ,also delete
student.contact=7820993299;
console.log(student);

student.rollno=2
console.log(student);

delete student.Name 
console.log(student); 

