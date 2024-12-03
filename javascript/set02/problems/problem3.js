//sum of numbers in array

let input = prompt("Enter an array of numbers with a space between each: ");
let arr = input.split(" ").map(Number);

// finding sum
let sum = 0;
for (let i = 0 ; i < arr.length; i++){
    sum += arr[i]
}
//printing
console.log(sum);