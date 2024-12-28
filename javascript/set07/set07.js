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

function asciiArrayToString(asciiArray) {
    return String.fromCharCode(...asciiArray);
}

// Problem 5: Testing
const asciiArray = [72, 101, 108, 108, 111];
console.log(asciiArrayToString(asciiArray)); // Output: "Hello"

//////////////////////////////////////////////////////////////////////////////////////////

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
}

// Problem 6: Testing
console.log(caesarCipher("Hello World", 3)); // Output: "Khoor Zruog"

//////////////////////////////////////////////////////////////////////////////////////////

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Problem 7: Testing
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]