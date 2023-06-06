//difference between dot and bracket Notation

// //############In Dot Notation #############
// const person ={
//     name: "Satyam",
//     age:22,
//     "person hobbies":["guitar","sleeping","Listening music"]
// }
// console.log(person.person hobbies);

//It show error in console because in JavaScript Space not allowed so we van use Bracket Notation

// ############ In Bracket Notation ############

// const person ={
//     name: "Satyam",
//     age:22,
//     "person hobbies":["guitar","sleeping","Listening music"]
// }
// console.log(person["person hobbies"]);


//Second difference between dot and bracket Notation
//-- How to add other const key value in const variable

//########## In Dot Notation ##########

// const key ="email";
// const person ={
//     name: "Satyam",
//     age:22,
//     "person hobbies":["guitar","sleeping","Listening music"]
// }
// person.key ="satyamsinhaa787@gmail.com";
// console.log(person);
// we don't want this key value but in Dot Notation show this key value


// #################### In Bracket Notation #############

const key ="email";
const person ={
    name: "Satyam",
    age:22,
    "person hobbies":["guitar","sleeping","Listening music"]
}
person[key] ="satyamsinhaa787@gmail.com";
console.log(person);
//Its Work in bracket Notation