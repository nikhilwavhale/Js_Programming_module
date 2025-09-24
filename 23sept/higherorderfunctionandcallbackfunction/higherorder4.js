function demo(data)
{
      console.log(typeof(data)) // function
      console.dir(data)
      data()
}

// higherorderfunction('Hello Programmer')
// higherorderfunction(23)
// higherorderfunction(true)
// higherorderfunction(null)

function test()
{
    console.log("I am from test function")
}
//test is a call back function and demo as higher order function
demo(test)