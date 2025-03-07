// Check if given Parentheses expression is balanced or not
// Input: str = “((()))()()”
// Output: Balanced
// Input: str = “())((())”
// Output: Not Balanced
function isBalanced(str) {
  let stack = [];

  for (let ch of str) {
    if (ch === '(') {
      stack.push(ch); // Push opening parentheses onto the stack
    } else if (ch === ')') {
      if (stack.length === 0) {
        return "Not Balanced"; // Unmatched closing parentheses
      }
      stack.pop(); // Match and remove the last opening parentheses
    }
  }

  // If stack is empty, parentheses are balanced
  return stack.length === 0 ? "Balanced" : "Not Balanced";
}

// Test cases
const result1 = isBalanced("((()))()()");
console.log(result1); // Output: Balanced

const result2 = isBalanced("())((())");
console.log(result2); // Output: Not Balanced
