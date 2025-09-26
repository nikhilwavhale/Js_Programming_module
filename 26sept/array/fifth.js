const user1={
    username:'rajiv',
    userid:1210
}

// const user2={
//     username:'rajiv',
//     userid:1210

// }
// shalow copy 
const user2=user1
console.log(user1);
console.log(user2);

user2.username='anil'
console.log(user1);
console.log(user2);