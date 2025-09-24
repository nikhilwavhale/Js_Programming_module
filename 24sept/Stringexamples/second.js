// Object : 

/* Object : one of the non primitive data types and also called as reference type of data type 

    Object : they have three sub data types 
    Object literals 
    Array 
    Function 

    How to declare the object literals 
    Object literals :- when we used object literals = whenever we have to store the data in the form of key valus pair 
*/

//1. Object literals ,  Non premitive data type 
let EmpObj={
    id:1233,
    Name:'Rohan',
    jobrole:'software engineer',
    experience:10,
    city:'pune',

    // Function 
    info:function()
    {
        console.log('Employee from Infosys');
    },
    //Array
    Skills:['JAVA' , 'JS','React','DBMS'],

    //Object 
    contact:{
        add:'Pune Maharashtra',
        pincode:411057,
        MobNo:7744985510
    }
}


console.log(EmpObj); 
console.log(EmpObj.Skills); // Accessing single record in object like array child object or function in present 
EmpObj.email='rohan@gmail.com'
console.log(EmpObj); // email added in EmpObj as a new key 

EmpObj.contact.country='India'
console.log(EmpObj);


let EmpObj2={
    id:1233,
    Name:'Rohan',
    jobrole:'software engineer',
    experience:10,
    city:'pune',

    // Function 
    info:function()
    {
        console.log('Employee from Infosys');
    },
    //Array
    Skills:['JAVA' , 'JS','React','DBMS'],

    //Object 
    contact:{
        add:'Pune Maharashtra',
        pincode:411057,
        MobNo:7744985510
    }
}


console.log(EmpObj==EmpObj1)
delete empobj1.info // Use for delete 
console.log(EmpObj)
