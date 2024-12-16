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

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (randomNumber === 0) {
        return array1;
    }

    return array2;
}

// Create a function that will receive two arrays and will return an array with elements 
// that are in the first array but not in the second
function returnFirstArray(array1, array2) {
    return array1
}

// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function generateArray(size) {
    
}

// Calculate the sum of first 100 prime numbers and return them in an array
function sumOfPrimeNumbersTill100() {
    let prime = [];

    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Adding all prime numbers into the prime array
    const max = 100;
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }

    // Adding all the prime numbers in the prime array. To get the sum of all prime numbers. 
    let total;
    for (let i = 0; i < prime.length; i++) {
        total += prime[i];
    }

    console.log(total); // logging the total sum of prime numbers to the console. 
}