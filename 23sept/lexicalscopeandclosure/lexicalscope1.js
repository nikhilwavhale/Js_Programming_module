// debugger
let globalvariable='I am script / global variable variable'

function outerfunction()
{
    let outervariable='I am outer variable'
    console.log('From outer function');  // 1 execute
    console.log(outervariable)          // 2 execute
    function innerfunction()
    {
        let innervariable='I am inner type of variable'
        console.log('from inner function'); // 3 execute
        console.log(innervariable)          // 4 execute
        console.log(outervariable)          // 5 execute
        console.log(globalvariable)         //6 execute
    }
   return innerfunction
}

let result=outerfunction()
result()
