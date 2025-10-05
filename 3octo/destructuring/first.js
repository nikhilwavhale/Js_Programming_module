// destructuring the array 

const colors=['red','white','green','pink','blue','yello']
console.log(colors);

// const colornewarr=[...colors]

// const color1=colors[0]
// const color2=colors[1]
// const color3=colors[2]

// console.log(color1,color2,color3);

const [color1,color2,,color4]=colors
console.log(color1,color2,color4); 

const [,,,,,color5]=colors
console.log(color5);

