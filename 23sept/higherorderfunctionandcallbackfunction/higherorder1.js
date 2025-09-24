function higherorder(tester)
{
    console.log('from higher order function');
    tester()
}

const tester=function ()
{
    console.log('Ananymous function')
}

// tester()

higherorder(()=>
{
    console.log('Arrow function')
})