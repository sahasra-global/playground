// Create a function that will capitalize the first letter of each word in a text
let input = prompt("Enter a sentence: ");
let words = input.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

output = words.join(" ");
console.log(output)