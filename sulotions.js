// Task 1: Random Number Guessing Game
const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess === randomNumber) {
    console.log("Task 1: Congratulations! You guessed it right!");
} else if (userGuess > randomNumber) {
    console.log("Task 1: Too high! Try again.");
} else {
    console.log("Task 1: Too low! Try again.");
}
console.log(`Task 1: The correct number was ${randomNumber}`);

// Task 2: String Analyzer
const userSentence = prompt("Enter a sentence:");
const totalCharacters = userSentence.length;
const wordsArray = userSentence.split(" ");
const totalWords = wordsArray.length;
const containsJavaScript = userSentence.includes("JavaScript");

console.log("Task 2 Results:");
console.log(`Total characters: ${totalCharacters}`);
console.log(`Total words: ${totalWords}`);
console.log(`Contains 'JavaScript': ${containsJavaScript}`);

// Task 3: Math Function Application
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

const smallestNumber = Math.min(num1, num2, num3);
const largestNumber = Math.max(num1, num2, num3);
const average = (num1 + num2 + num3) / 3;
const roundedAverage = Math.round(average);

console.log("Task 3 Results:");
console.log(`Smallest number: ${smallestNumber}`);
console.log(`Largest number: ${largestNumber}`);
console.log(`Average (rounded): ${roundedAverage}`);

// Task 4: Random Password Generator
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";

for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

console.log("Task 4: Generated password:", password);

// Task 5: Age Group Classifier
const userAge = parseInt(prompt("Enter your age:"));
let ageGroup;

if (userAge >= 0 && userAge <= 12) {
    ageGroup = "Child";
} else if (userAge >= 13 && userAge <= 17) {
    ageGroup = "Teen";
} else if (userAge >= 18 && userAge <= 64) {
    ageGroup = "Adult";
} else if (userAge >= 65) {
    ageGroup = "Senior";
} else {
    ageGroup = "Invalid age";
}

console.log(`Task 5: You are classified as: ${ageGroup}`);
