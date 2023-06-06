// let winningNumber = 19;
// let userguess = prompt("guess a number")
// console.log(typeof userguess, userguess)

// let winningNumber = 19;
// let userguess = +prompt("guess a number");
// console.log(typeof userguess, userguess)

let winningNumber = 19;
let userguess = +prompt("guess a number");

if(userguess === winningNumber){
    console.log("your guess is right");
}else{
    if(userguess < winningNumber){
        console.log("too low!!!");
}else{
    console.log("too high")
}
}
