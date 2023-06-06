//while loop in Array in const variable

// const fruits=["apple","mango","grapes"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }   

//while loop in upper caase in const variable

// const fruits=["apple","mango","grapes"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase());
//     i++;
// } 

//Make New Array in const in while loop

const fruits =["apple","mango","grapes"];
const fruits2=[]
let i=0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase())
    i++;
}
console.log(fruits2);