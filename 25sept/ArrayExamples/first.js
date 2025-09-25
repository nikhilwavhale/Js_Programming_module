// Array 

//object
let obj={
    id:2323,
    empname:'rajiv'
}
//function
function display()
{
    console.log('Thiis is function');
}
console.log(typeof(obj))

//array stored primitive and non-primitive datatypes
let arr=['itview',12,true,null,undefined,obj,[1,2,3,4],display]
console.log(arr);

console.log(arr[7]());
console.log(typeof(arr));