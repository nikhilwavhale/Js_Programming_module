let arr =[20,10,5,4,32]

console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     console.log(`arr[${i}]=${arr[i]}`);
// }

    
    // forof it is a structure not a function
// for (const ele in arr) {
//     if (ele<5)
//     {
//         console.log(arr[ele]);
//     }
// }

for (const ele of arr) {
    if(ele>=5)
    {
        // break
        console.log(ele);
        continue

    }
}


