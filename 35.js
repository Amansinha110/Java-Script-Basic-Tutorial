//Array destructing
//How to print different Index different values

// const myarray=["value1","value2"];
// let myvar1 = myarray[0];
// let myvar2 = myarray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//change index number

// const myarray=["value1","value2"];
// let myvar1 = myarray[1];
// let myvar2 = myarray[0];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// shortcut to print --- using Array Destrcting

// const myarray=["value1","value2"];
// let [myvar1, myvar2] = myarray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// change value of variable -- after array destructuring

// const myarray=["value1","value2"];
// let [myvar1, myvar2] = myarray;
// myvar1="value changed"
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//print more value in variable

// const myarray=["value1","value2","value3"];
// let [myvar1, myvar2,myvar3] = myarray;
// myvar1="value changed"
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log("value of myvar3", myvar3);

// Print only one element in variable in array destructring


// const myarray=["value1"];
// let [myvar1, myvar2,myvar3] = myarray;
// myvar1="value changed"
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log("value of myvar3", myvar3)

// How to print one variable value in another place & another place in array Destructing


// const myarray=["value1","value2","value3"];
// let [myvar1, ,myvar2] = myarray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//Make New Array of two variable

// const myarray=["value1","value2","value3","value4"];
// let [myvar1,myvar2]= myarray;
// let myNewArray= myarray.slice(2);
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);

//Do this work in Array Destructing -- without making New Array Add two Variable

const myarray = ["Array1","Array2", "Array3","Array4"];
let [myvar1,myvar2,...myNewArray]= myarray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);