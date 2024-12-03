//average of array

let input = prompt("Enter an array of numbers with a space between each: ");
let arr = input.split(" ").map(Number);
//sum
let sum = 0;
for (let i = 0 ; i < arr.length; i++){
    sum += arr[i]
}
//length
let len = arr.length
console.log(sum/len);