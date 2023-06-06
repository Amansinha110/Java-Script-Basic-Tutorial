// #Nested destructuring

// const users =[
//     {userid:1,firstName:"Harshit",gender:"male"},
//     {userid:2,firstName:"Satyam",gender:"male"},
//     {userid:3,firstName:"Ravi",gender:"male"},
// ]
// const[]=users;
// console.log(users);

//#print specific users


// const users =[
//     {userid:1,firstName:"Harshit",gender:"male"},
//     {userid:2,firstName:"Satyam",gender:"male"},
//     {userid:3,firstName:"Ravi",gender:"male"},
// ]
// const[user1,user2,user3]=users;
// console.log(user1);

//# object mein se destructing karna hai specific username and gender choose only

// const users =[
//     {userid:1,firstName:"Harshit",gender:"male"},
//     {userid:2,firstName:"Satyam",gender:"male"},
//     {userid:3,firstName:"Ravi",gender:"male"},
// ]
// const[{firstName}, ,{gender}]=users;
// console.log(firstName);
// console.log(gender);

//# Change user variable Name


// const users =[
//     {userid:1,firstName:"Harshit",gender:"male"},
//     {userid:2,firstName:"Satyam",gender:"male"},
//     {userid:3,firstName:"Ravi",gender:"male"},
// ]
// const[{firstName:user1firstname}, , {gender:user2}]=users;
// console.log(user1firstname);
// console.log(user2)

//# Also print userid as well as Name


const users =[
    {userid:1,firstName:"Harshit",gender:"male"},
    {userid:2,firstName:"Satyam",gender:"male"},
    {userid:3,firstName:"Ravi",gender:"male"},
]
const[{firstName:user1firstname,userid}, ,{gender:user2}]=users;
console.log(user1firstname)
console.log(userid);
console.log(user2);