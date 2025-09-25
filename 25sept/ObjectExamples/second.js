// seal function object 
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

// seal function is allow to user add key but not allow to delete any key from object 
Object.seal(EmpObj)
EmpObj.city='Mumbai'
EmpObj.contact.emailid='xyz@solution.com' 
console.log(EmpObj);

delete EmpObj.experience // delete properity is not working casue the object is seal() on line no :-26 
console.log(EmpObj); 



