// wirte a function transformString that accept  a string and a callback function. the callback should transform the string in some way eg: (uppercase of reverse)

function transformString(Str,callback)
{
    return callback(Str)
}

function uppercase(str1)
{
    console.log(str1.toUpperCase());
}

function rev(str2)
{
    console.log(str2.split('').reverse().join(''));
}






console.log(transformString('nikhil',uppercase));
console.log(transformString('nikhil',rev));