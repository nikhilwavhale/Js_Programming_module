function counter()
{
    console.log('From higher order function')
    let count=0
    return  ()=>
            {
                count++
                console.log('from function counter display')
            }

}


//console.log(counter());
//counter()
let result=counter()
console.log(result());
console.log(result());