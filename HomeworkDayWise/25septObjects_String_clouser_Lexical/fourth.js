/*Q4. Bank Account Security
Create a bankAccount object with properties: accountNumber, holderName, and balance.
Seal the object to prevent adding or deleting properties.
Add a method deposit(amount) that updates the balance.
Try adding a new property branch and check what happen */

let bankAccount={
    accountNumber:123456789123,
    holderName:'Ellen waly',
    balence:10000
}

console.log(bankAccount);

Object.seal(bankAccount) // sealing of object <----

bankAccount.deposite=10000
console.log(bankAccount); // DO not allow to add 

bankAccount.branch='Pune'
console.log(bankAccount); // DO not allow to add key 