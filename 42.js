//# Object inside Array 
//--- vary useful in real world application

// const users = [
//     {userid:1, firstname:"satyam",gender:"male"},
//     {userid:2, firstname:"Harshitsir",gender:"male"},
//     {usewrid:3, firstname:"Ravi", gender:"male"}
// ]
// console.log(users);

//# Add loop in Objects inside Array


// const users = [
//     {userid:1, firstname:"satyam",gender:"male"},
//     {userid:2, firstname:"Harshitsir",gender:"male"},
//     {usewrid:3, firstname:"Ravi", gender:"male"}
// ]
// for (let user of users){
//     console.log(user);
// }

// # How to get only Userid


// const users = [
//     {userid:1, firstname:"satyam",gender:"male"},
//     {userid:2, firstname:"Harshitsir",gender:"male"},
//     {userid:3, firstname:"Ravi", gender:"male"}
// ]
// for (let user of users){
//     console.log(user.userid)
// }

//# print only firstName


const users = [
    {userid:1, firstname:"satyam",gender:"male"},
    {userid:2, firstname:"Harshitsir",gender:"male"},
    {usewrid:3, firstname:"Ravi", gender:"male"}
]
for (let user of users){
    console.log(user.firstname);
}