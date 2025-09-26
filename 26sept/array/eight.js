const user1={
    username:'rajiv',
    userid:1210,
    useradd:{
        city:'pune',
    }
}

// user2=user1

// shalow copy using spreed operator ,and it take snap only first layer, we can use 'Object.asign()' to make shallow copy 
const user2={...user1}

console.log(user1);
console.log(user2);
user2.username='anil'
user2.useradd.city='mumbai'
console.log(user1);
console.log(user2);

// user2.username='anil' // this username make new address
// console.log(user1);
// console.log(user2); // anil :- its making new address


// DeepCopy :-  structureClone(object)   <---- modern react 
// Json.parse(Json.String)

// const user2={...structuredClone(user2)}
