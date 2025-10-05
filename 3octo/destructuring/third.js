const userintro={
    username:'ravan',
    userid:1233,
    useradd:
    {
        city:'pune',
        state:'maharashtra'
    }
}


function userdata({userid,useradd:{state}}) // nested object destructuring
{
    console.log(userid,state);
}

userdata(userintro) // object as a param

