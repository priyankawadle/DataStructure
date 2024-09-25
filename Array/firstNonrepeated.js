function firstNonRepeatedCharacter(str) {
    const charCount = {}; // Object to store character counts

    // Loop through the string and count each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Loop through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if no non-repeated character is found
}

// Example usage
const inputString = "swiss";
const result = firstNonRepeatedCharacter(inputString);
console.log(result); // Output: 'w'
