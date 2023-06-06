// use const for creating Array

// const pi = 3.14;
// console.log(pi);

//we could not change value of pi show error

// const pi =3.14;
// pi=12;
// console.log(pi);

// How to add variable in const using push

// const fruits =["apple","mango"];
// fruits.push=("banaban");
// console.log(fruits);

//you can use push/pop and unshift/shift in const variable but you could not chane value of variable in const
//ex:- it show error because you cannot push or pop in const value
const fruits=["apple","mango"];
fruits=["grapes","pineapple"];
fruits.push("banana");
console.log(fruits);