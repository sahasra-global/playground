// Create a function to calculate the distance between two points defined by their x, y coordinates
let x1 = prompt("Enter x1:");
let y1 = prompt("Enter y1:");
let x2 = prompt("Enter x2:");
let y2 = prompt("Enter y2:");

let distance = ((x2 - x1)**2 + (y2 - y1)**2)**0.5

console.log(distance)