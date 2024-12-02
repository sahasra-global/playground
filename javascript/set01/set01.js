/** Calling ALL functions here */
console.log('Printing Numbers from 1 - 10: ')
printNumbers()

console.log('\nPrinting Odd Numbers Less Than 100: ')
printOddNumbers()

console.log('\nMultiplication Table of 7:')
multiplesOfSeven()

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
