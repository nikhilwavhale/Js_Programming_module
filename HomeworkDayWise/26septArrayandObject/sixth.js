let arr = [1, 2, [3, 4], 5];

// TODO: Create a shallow copy of arr.
// Change the nested element `arr[2][0]`.
// Observe if original array also changes.

const shallowcopy=[...arr]
shallowcopy[2][0]=88

console.log('shallowcopy array :'+shallowcopy);
console.log(' original array :'+arr);

