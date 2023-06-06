//Objext reference type
//arrays are good but not sufficient
//for real world
//objects store key value pairs
//objects don't have Index

//How to create object

// const person={name:"harshit",age:22};
// console.log(person);
// // how to know type of variable
// console.log(typeof person);

//How to Print only One value in array
//objects don't have Index


// const person={name:"harshit",age:22};
// console.log(person.name);
// console.log(person.age);
// // how to know type of variable
// console.log(typeof person);

//Make array to split the value

// const person = {
//     name: "harshit",
//     age:22,
//     hobbies:["guitar","sleeping","listening music"]
// }
// console.log(person);

//How to get only one value--In object

// const person ={
//     name: "Satyam",
//     age:22,
//     hobbies:["guitar","sleeping","Listening music"]
// }
// console.log(person.name);
// console.log(person.hobbies);

//How to add key value pair to objects


// const person ={
//     name: "Satyam",
//     age:22,
//     hobbies:["guitar","sleeping","Listening music"]
// }
// person.gender="male";
// console.log(person);

//Without using (.) print only one variable value


// const person ={
//     name: "Satyam",
//     age:22,
//     hobbies:["guitar","sleeping","Listening music"]
// }
// console.log(person["name"]);

// second print


// const person ={
//     name: "Satyam",
//     age:22,
//     hobbies:["guitar","sleeping","Listening music"]
// }
// console.log(person["age"]);

//How to add key value pair to objects to use bracket[ ]Notation


const person ={
    name: "Satyam",
    age:22,
    hobbies:["guitar","sleeping","Listening music"]
}
console.log(person); 
person["gender"]="male";
console.log(person);