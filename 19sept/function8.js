let a=10;
let b=20;


addition(a,b)   //  Cannot access 'addition' before initialization
let addition=function (a,b)
{
    let result=a+b
    console.log(result);
}