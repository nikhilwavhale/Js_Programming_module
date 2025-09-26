/*Q2. Car Information (Object.seal)
Create a car object with properties: brand, model, and year.
Seal the object using Object.seal().
Try changing the value of an existing property, deleting a property, and adding a new one.
Print the object to see which changes are applied.*/

let Car={
    brand:'BMW',
    model:232322,
    year:2019
}
console.log(Car);

Object.seal(Car) 

// adding new value
Car.brand='rolls royals'
console.log(Car);  // added new value

// adding new key
Car.highspeed='400Km/hr'
console.log(Car); // not allow to add new key 

// deleting exesting key 
delete Car.brand
console.log(Car); // Not alloewd to delete exesting key 
