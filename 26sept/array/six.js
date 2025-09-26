const user1={
    username:'rajiv',
    userid:1210
}

// user2=user1

// shalow copy 
const user2={...user1}

console.log(user1);
console.log(user2);

user2.username='anil' // this username make new address
console.log(user1);
console.log(user2); // anil :- its making new address