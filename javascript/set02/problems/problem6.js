//max number in array

let input = (prompt("Enter an array with a comman in between each number: "));
let arr = input.split(",").map(Number);
console.log(Math.max(...arr));