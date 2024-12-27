// Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

let x1 = prompt("Enter x coordinate of the first center:");
let y1 = prompt("Enter y coordinate of the first center:");
let x2 = prompt("Enter x coordinate of the second center:");
let y2 = prompt("Enter y coordinate of the second center:");
let r1 = prompt("Enter the radius of first circle: ");
let r2 = prompt("Enter the radius of the second circle: ");
let distance = Math.sqrt((x2-x1)**2 + ((y2)-(y1))**2);

let intersecting= distance <= (r1+r2);
console.log(intersecting);
