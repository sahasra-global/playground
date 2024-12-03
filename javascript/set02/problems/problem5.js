//takes array and only returns positive values

let input = prompt("Enter an array of numbers with a comma between each: ");
let arr = input.split(",").map(Number);
let output = arr.filter(i => i > 0)
console.log(output)

