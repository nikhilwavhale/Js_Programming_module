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

// How to add anew property and how to delete property 
EmpObj.contact.emailid='xyz@itviewsolution' 
console.log(EmpObj);

delete EmpObj.experience
console.log(EmpObj); 

EmpObj.id='23243'
console.log(EmpObj);

// freezing object in javascript 

Object.freeze(EmpObj) // freeze is used to make

EmpObj.experience=10 // adding exp but not added cause the object is freeze on line no :-38 
console.log(EmpObj);

EmpObj.city='Mumbai' // we can not modify existing city casue the object is freeze on line no :- 38 
console.log(EmpObj);



