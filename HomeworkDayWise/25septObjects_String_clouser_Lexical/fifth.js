/*String
Q1. Write a program that processes a sentence string and performs the following operations:
Take a sentence (e.g., "JavaScript is a powerful programming language").
Use slice() to extract the word "powerful".
Use split() to break the sentence into an array of words.
Use includes() to check if the word "JavaScript" exists in the sentence.
Use indexOf() to find the position of the word "language" in the sentence.*/

let Str='JavaScript is a powerful programming language'

console.log(Str);

console.log(Str.slice(16,24)); // slice()

let res=Str.split(' ')
console.log(res);  // split into array sentences 

console.log(Str.includes('JavaScript')); // Includes 

console.log(Str.indexOf('language')); // indexing  answer:- 37 