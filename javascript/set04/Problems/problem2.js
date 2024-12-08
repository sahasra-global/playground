// Rotate an array to the right 1 position
// [1,2,3] --> [3,2,1]

const array = [1,2,3];
array.unshift(array.pop());
console.log(array);