// Object Destructing

// const band={
//     bandName: "Led zepplin",
//     famousSong : "stairway to heaven",
// }
// const bandName = band.bandName;
// const famousSong= band.famousSong;
// console.log(bandName, famousSong);

// Shortcut to Run command using object destructuring


// const band={
//     bandName: "Led zepplin",
//     famousSong : "stairway to heaven",
// };
// const {bandName, famousSong}= band;
// console.log(bandName);

// Change value of variable Name


// const band={
//     bandName: "Led zepplin",
//     famousSong : "stairway to heaven",
// }
// const {bandName:var1, famousSong:var2}= band;
// console.log(var1);
// console.log(var2);

// How to add more variable Name


const band={
    bandName: "Led zepplin",
    famousSong : "stairway to heaven",
    year: 1968,
    anotherfamousSong: "Kashmir",
}
let {bandName, famousSong, ...restprops}= band;
console.log(bandName);
console.log(restprops);