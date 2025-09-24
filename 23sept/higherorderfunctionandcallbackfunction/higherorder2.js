function counter()
{
    console.log('From higher order function')
    let count=0
    return ()=>
            {
                count++
                return count
            }

}
// console.log(counter());
// counter()
let result=counter()
console.log(result()) //.1
console.log(result());//2
console.log(result());//3