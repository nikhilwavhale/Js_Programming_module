// String: Seq of char
// string is primitive datatype 

let str='It View Solution'
console.log(str); // display 
console.log(typeof(str)); // check data type of str

console.log(str.length);// find out number of characters in given string , length is a properity 

console.log(str.toUpperCase()); // to make string in uppercase 
console.log(str.toLowerCase()); // to make string in lowercase

console.log(str.trim()); // remove starting and ending space of the string
console.log(str.trimStart()); // remove only starting space 
console.log(str.trimEnd()); // remove only ending space
console.log(str);// trim function does not affect on our original string

let str2=' Pune'

console.log(str.concat(str2)); // combine two strings or concatenate of two strings 

console.log(str.includes(str2)); // false 
console.log(str.includes('W')); // includes return the true or false value depending on the char or string is present in the given string or not 

console.log(str.indexOf('w')); //6 its return the index of first occurrence of char
console.log(str.indexOf('z')); //-1 
console.log(str.indexOf(str2)); //-1
console.log(str.indexOf('Solution')); //indexOf function is case sensitive function 

console.log(str.replace('i','@')); // replace return replace character with defined char in string first occurrence
console.log(str.replaceAll('i','*')); // it replace all the characters in string 
console.log(str.replace('Solution','Technology')); // word replacing 

//masking 
let aadharNo='2345'
console.log(aadharNo.padStart(12,'*')); 
console.log(aadharNo.padEnd(12,'#'));

// str='It view Soluction'
let result=str.split(" ")
console.log(result); // split do not change any original string value

// slice function that take given string in some part with starting index and end index and exclude the end index value 
console.log(str);
console.log(str.slice(0,5));  // It Vi
let result1=str.slice(6,9)
console.log(result1);
console.log('Original string blow '); 
console.log(str);
console.log(str.slice(0,-1));
console.log(str.slice(-2,-1)); // O
console.log(str.slice(-3,-4)); // invalid range 

console.log(str);
console.log(str.substring(0,5)); // It Vi
console.log(str.substring(0,-1));
console.log(str.substring(5,-2));
console.log(str.substring(2,4));
console.log(str.substring(4,2));
console.log(str.substring(-2,-3)); // invalid range
console.log(str.substring(2)); // it goes to end 
console.log(str.slice(2)); // it also goes to end 

// difference between slice and substring 






// split :- They split the string in substrin (subpart) with delimiter which is w passed as a parameter

// slice():- slice its take a substring from given string using start index and end index but exclude the value of end index

// subString() :- substrin function also return the substring value from given input string but they don not operate on -ve values of parameter

