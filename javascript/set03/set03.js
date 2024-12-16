// Print the first 10 Fibonacci numbers without recursion
function fibonacciWithoutRecusion() {
    max = 10;

    let a = 0, b = 1, temp;

    console.log(a);

    for (let i = 1; i < max; i++) {
        console.log(b);
        temp = a + b;
        a = b;
        b = temp;
    }
}

// Testing problem 1
fibonacciWithoutRecusion()
console.log() // NEW LINE

// ###############################################################

// Create a function that will find the nth Fibonacci number using recursion
function fibonacci(num) {
    if (num == 1) {
        return 0;
    }

    if (num == 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Testing problem 2
console.log(fibonacci(10))
console.log(fibonacci(25))
console.log(fibonacci(40))

// ###############################################################

// Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Testing Problem 3
console.log(isPrime(5))
console.log(isPrime(88))
console.log(isPrime(345))

// ###############################################################

// Calculate the sum of digits of a positive integer number

// ###############################################################

// Print the first 100 prime numbers
function printingFirst100PrimeNumbers() {
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

    // Printing the prime array
    console.log(prime)
}

// Testing Problem 5
printingFirst100PrimeNumbers()

// ###############################################################

// Create a function that will return in an array the first “p” prime numbers greater than “n”
