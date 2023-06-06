// for of loop in array -- push in second Array

// const fruits=["apple","mango","grapes","orange","litchi"];
// const fruit2=[];

// for (let fruit of fruits){
//     fruit2.push(fruit.toUpperCase());
// }
// console.log(fruit2);

//for in loop in array ---it gives value in index

// const fruits=["apple","mango","grapes","orange","litchi"];

// for (let Index in fruits){
//     console.log(Index)
// }

//get value in word in for in loop in array

// const fruits=["apple","mango","grapes","orange","litchi"];

// for (let Index in fruits){
//     console.log(fruits[Index])
// }

//push in uppercase in new variable in for in loop


const fruits=["apple","mango","grapes","orange","litchi"];
const fruit2=[];

for (let Index in fruits){
    fruit2.push(fruits[Index].toUpperCase())
}
console.log(fruit2);