# Cypher Encryptor using JavaScript

## Description
This project involves a JavaScript program that encrypts text using a simple substitution cipher. The cipher moves each letter 15 spaces forward in the alphabet while maintaining the case and preserving non-alphabetic characters.

## How to Use
1. **Installation**
   - Download or clone the 'cypher.js' file to your local system.

2. **Usage**
   - Open the 'cypher.js' file in a JavaScript environment or editor.
   - Use the provided `encode15(userEnc)` function to encrypt a message.
   - Input a sentence or phrase to encrypt when prompted.
   - The program will output the encrypted message preserving spaces and punctuation marks.

## Code Overview
The `encode15(userEnc)` function within 'cypher.js' accepts a string input and applies the 15-space forward cipher to each alphabetic character while keeping non-alphabetic characters unchanged. The process uses ASCII values to shift the letters cyclically.

## Example
```javascript
// Prompt the user for input
let userEnc = prompt("Please enter a phrase to encrypt: ").toUpperCase();

// Encrypt the user input and display the result
alert(`Encrypted: ${encode15(userEnc)}`);

// Function to encrypt the message
function encode15(userEnc) {
  // ... (Code as provided)
}
```

## Note
This project was developed as part of my personal learning journey in JavaScript. The purpose was to explore and apply JavaScript concepts related to string manipulation, ASCII character codes, and basic encryption techniques. As a result, the code might reflect learning experimentation and may not represent optimal or professional-grade implementation.


