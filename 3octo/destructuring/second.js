// destructing of object 

const userintro={
    username:'ravan',
    userid:1233,
    useradd:
    {
        city:'pune',
        state:'maharashtra'
    }
}
console.log(userintro);

console.log(userintro.username);

// destructuring of object and nested object , in destructuring is only know the keys 
const {username,userid,useradd:{city}}=userintro 
console.log(username,userid,city);