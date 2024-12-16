// CALLING THEM
const array1 = [3, 6, 9, 0, 1]
const array2 = [1, 6, 9, 3, 2, 11, 2]
mergingTwoArrays(array1, array2);

// Create a function that will merge two arrays and return the result as a new array
function mergingTwoArrays(array1, array2) {
    let combinedArray = [];
    combinedArray = [...array1, ...array2];
    console.log(combinedArray);
}

// Create a function that will receive two arrays of numbers as arguments and return an 
// array composed of all the numbers that are either in the first array or second array but not in both
function randomlyAssignArrayValues(array1, array2) {
    const randomNumber = getRandomInt(0, 2);

    if (randomNumber === 0) {
        return array1;
    }

    return array2;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create a function that will receive two arrays and will return an array with elements 
// that are in the first array but not in the second


// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// Calculate the sum of first 100 prime numbers and return them in an array