/*Q3. Product with Special Property (Object.defineProperty)
Create a product object with properties: id and name.
Use Object.defineProperty() to add a price property:
writable: false (cannot be changed)
enumerable: true (should be visible in loops)
configurable: false (cannot be deleted or redefined)
Test the behaviour by trying to update and delete the price property. */

let product={
    id:1,
    Name:'atul'
}

console.log(product);

Object.defineProperty(product,'id',{
    writable:false,
    enumerable:true,
    configurable:false
    
})

product.prise=2000
console.log(product); // added 

delete product.id
console.log(product); // Not deleted 

product.id=2
console.log(product); // not redefined 







