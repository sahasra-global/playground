/** Calling ALL functions here */
console.log('Printing Numbers from 1 - 10: ')
printNumbers()

console.log('\nPrinting Odd Numbers Less Than 100: ')
printOddNumbers()

console.log('\nMultiplication Table of 7:')
multiplesOfSeven()

console.log('\nPrinting All Multiplication Tables from 1 - 10')
multiplicationTablesFromOneToTen()

console.log('\nPrinting sum of 1-10')
console.log(sumOfOneTo10())

factorial(10)

console.log('\nSum of even numbers greater than 10 and less than 30')
console.log(sumOfEvenNumbersGreaterThan10LessThan30())

// Printing numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

// Print the odd numbers less than 100
function printOddNumbers() {
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

// Print the multiplication table with 7
function multiplesOfSeven() {
    for (let i = 1; i <= 10; i++) {
        console.log('7 * ' + i + ' = ' + (7 * i));
    }
}

// Print all the multiplication tables with numbers from 1 to 10
function multiplicationTablesFromOneToTen() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + ' * ' + j + ' = ' + (i * j));
        }
        console.log()
    }
}

// Calculate the sum of numbers from 1 to 10
function sumOfOneTo10() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    return sum;
}

// Calculate 10!
function factorial(n) {
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers")
    }

    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }

    console.log("\nFactorial for 10! is: " + result)
}

// Calculate the sum of even numbers greater than 10 and less than 30
function sumOfEvenNumbersGreaterThan10LessThan30() {
    let sum = 0;

    for (let i = 11; i < 30; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }

    return sum;
}