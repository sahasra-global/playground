function extractWords(text) {
    return text.split(/\s+/).filter(Boolean);
}

// Problem 1: Testing
const text = "This is a sample text with several words.";
console.log(extractWords(text));

//////////////////////////////////////////////////////////////////////////////////////////
function csvToArray(csvText) {
    // Split the text into lines
    const lines = csvText.trim().split("\n");

    // Split each line into values
    const array = lines.map(line => line.split(","));
    
    return array;
}

// Problem 2: Testing
const csvText = "name,age,city\nJohn,30,New York\nJane,25,Los Angeles";
console.log(csvToArray(csvText));

//////////////////////////////////////////////////////////////////////////////////////////
function stringToArray(str) {
    return str.split('');
}

// Problem 3: Testing
const sampleText = "hello";
console.log(stringToArray(sampleText)); // Output: ['h', 'e', 'l', 'l', 'o']

//////////////////////////////////////////////////////////////////////////////////////////

function convertingStringToASCII(words) {
    let words = s.split(" ");
    words.forEach((word) => {
        let firstLetter = word.charAt(0);
        if (firstLetter >= 'A' && firstLetter <= 'Z') {
            firstLetter = String.fromCharCode(firstLetter.charCodeAt(0) + 32);
        } else if (firstLetter >= 'a' && firstLetter <= 'z') {
            firstLetter = String.fromCharCode(firstLetter.charCodeAt(0) - 32);
        }
        process.stdout.write(firstLetter + word.substring(1) + " ");
    });
}

// Problem 4: Testing
let s = "This is a test of string manipulation";
console.log(convertingStringToASCII(s))

//////////////////////////////////////////////////////////////////////////////////////////

// Create a function that will convert an array containing ASCII codes in a string

//////////////////////////////////////////////////////////////////////////////////////////
// Implement the Caesar cypher

//////////////////////////////////////////////////////////////////////////////////////////
// Implement the bubble sort algorithm for an array of numbers