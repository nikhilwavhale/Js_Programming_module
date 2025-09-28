/*A) 
let person = {
  name: "Rahul",
  address: { city: "Pune", pincode: 411001 }
};

 TODO: Create a shallow copy of person.
 Then, change only the `city` in the copy.
 Check whether the original object is also affected. */

 let person = {
  name: "Rahul",
  address: { city: "Pune", pincode: 411001 }
};

const shallowcopy={...person} 

shallowcopy.city='mumbai'
console.log(shallowcopy);
console.log(person);