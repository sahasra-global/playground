function findMaxInJaggedArray(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      // If it's an array, recursively find the max within it
      const subMax = findMaxInJaggedArray(element);
      max = Math.max(max, subMax);
    } else {
      // If it's a number, compare with the current max
      max = Math.max(max, element);
    }
  }

  return max;
}

// Problem 1: Testing
const jaggedArray = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const maxNumber = findMaxInJaggedArray(jaggedArray);

console.log(maxNumber); // Output: 100

///////////////////////////////////////////////////////////////////////////////////////

function deepCopyJaggedArray(jaggedArray) {
    return jaggedArray.map(item => 
        Array.isArray(item) ? deepCopyJaggedArray(item) : item
    );
}

// Problem 2: Testing
const originalArray = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
const copiedArray = deepCopyJaggedArray(originalArray);

// Modifying the copied array to check for deep copy
copiedArray[1][2][0] = 42;

console.log(originalArray); // Output: [1, [2, 3, [4, 5]], 6, [7, [8, 9]]]
console.log(copiedArray);   // Output: [1, [2, 3, [42, 5]], 6, [7, [8, 9]]]

///////////////////////////////////////////////////////////////////////////////////////

function returnLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Problem 3: Testing
let sentence = "I love to code, but sometimes I can be lazy.";
let longestWord = returnLongestWord(sentence);
console.log(longestWord);

///////////////////////////////////////////////////////////////////////////////////////

function shuffleArray(arr) {
    const shuffled = [...arr]; // Create a copy to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
}

// Problem 4: Testing
const array = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledArray = shuffleArray(array);
console.log("Original Array:", array); // Original array remains unchanged
console.log("Shuffled Array:", shuffledArray);

///////////////////////////////////////////////////////////////////////////////////////

function returnRandomArray(n) {
    let array = Array.from({length: n}, (_, i) => i + 1);
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array.slice(0, n);
}

// Problem 5: Testing
console.log(returnRandomArray(5)); 

///////////////////////////////////////////////////////////////////////////////////////

function letterFrequency(str) {
    const frequency = {};
    for (let char of str) {
        if (char.match(/[a-z]/i)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    const result = [];
    for (let char in frequency) {
        result.push([char, frequency[char]]);
    }

    return result;
}

// Problem 6: Testing
console.log(letterFrequency("hello world"));
