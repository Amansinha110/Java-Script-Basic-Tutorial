//#Spread Operator in object
//--Revised spread operator in Array

// const array1=[1,2,3];
// const array2=[4,5,6];

// const newarray =[...array1, ...array2];
// console.log(newarray);

// Add more element in spread operator in Array

// const array1=[1,2,3];
// const array2=[4,5,6];

// const newarray =[...array1, ...array2,69,4928];
// console.log(newarray);

//# Spread in Array any word and Number

// const array1=[1,2,3];
// const array2=[4,5,6];

// const newarray =[..."abc"];
// console.log(newarray);

//# Spread Operator in objects case

// const obj1={
//     key1:"value1",
//     key2:"value2",
// };
// const obj2={
//     key3:"value3",
//     key4:"value4",
// };
// const newobject ={...obj1, ...obj2};
// console.log(newobject);

// # Write same key in object in spread operator

// const obj1={
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 ={
//     key3: "value3",
//     key4: "value4",
//     key1: "valueunique",
// };
// const newobject ={...obj1,...obj2};
// console.log(newobject)
// you cannot write same key If you write same key it overwrite value in console


// //# Add New key in Spread operator in Object
// const obj1={
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 ={
//     key3: "value3",
//     key4: "value4",
//     key1: "valueunique",
// };
// const newobject ={...obj1,...obj2,key69:"value56"};
// console.log(newobject)


//# Add More value in spread in spread operator in object
const obj1={
    key1: "value1",
    key2: "value2",
};
const obj2 ={
    key3: "value3",
    key4: "value4",
    key1: "valueunique",
};
const newobject ={..."abc"};
console.log(newobject)
