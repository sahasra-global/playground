// Calculate the sum of numbers received in a comma delimited string

let x=prompt("Enter a string of numbers with a comman in between each: ");
let arr = x.split(",").map(Number);
let sum = 0
for (let i=0; i< arr.length ; i++){
    sum += arr[i];
}
console.log(sum);
