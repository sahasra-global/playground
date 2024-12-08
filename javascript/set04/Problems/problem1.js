// Rotate an array to the left 1 position
// [1,2,3] --> [2,3,1]
const array = [1,2,3];
let first = array.shift();
array.push(first);
console.log(array)