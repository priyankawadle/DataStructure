function SearchLetter(input1, input2) {
    // Validate input
    if (!input1 || !input2 || input2.length !== 1) {
        return -1; // Invalid input
    }
    let char = input2; // The character to search for
    let positions = []; // Store positions of the character in the string
    // Find all occurrences of the character in the string
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] === char) {
            positions.push(i);
        }
    }
    // If there are less than 2 occurrences, return -1
    if (positions.length < 2) {
        return -1;
    }
    let maxDistance = 0;
    // Calculate the largest distance between any two occurrences
    for (let i = 0; i < positions.length - 1; i++) {
        for (let j = i + 1; j < positions.length; j++) {
            // Extract substring strictly between two positions
            let substring = input1.slice(positions[i] + 1, positions[j]);
    
            // Filter out spaces and the target character ('a') itself
            let uniqueChars = new Set(
                substring.split('').filter(c => c !== ' ' && c !== input2)
            );
            // Debug: Log unique characters and their size
            console.log(`Set(${uniqueChars.size})`, uniqueChars);
            // Update maxDistance
            maxDistance = Math.max(maxDistance, uniqueChars.size);
        }
    }
    return maxDistance;
}
// Example usage:
let input1 = "my name is granar";
let input2 = "a";
console.log(SearchLetter(input1, input2)); // Output: 7
