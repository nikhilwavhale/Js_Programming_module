let obj ={
    sname:'rajiv',
    sid:22101,
}

console.log(obj);

// forof loop structure it is only aplicable to access array traversing 
// for (const ele of obj) {
//     console.log(obj);
// }

for (const key in obj) {
    console.log(`key ${key}:${obj[key]}`);    
}


let laptop={
    type:'Dell',
    prise:20000,

}
console.log('Laptop object keys');

for (const key in laptop) {
   console.log(`key ${key}:${laptop[key]}`);
    
}


