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

// define properity is used restrict the key in object 
console.log(EmpObj);
Object.defineProperty(EmpObj,'id',{
    writable:false,
    configurable:false,

})
EmpObj.id=3434
delete EmpObj.id
console.log(EmpObj);
