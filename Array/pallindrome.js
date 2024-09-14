function palindrome(str) {
    str = str.toLowerCase();

    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i]
    }
    if (str.length !== reverseStr.length) {
        return "string is not palindrome"
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== reverseStr[i]) {
            return "string is not palindrome"
        }
    }

    console.log(reverseStr, str)
    return "string is  palindrome"
}
let str = '1PPooopp1'
console.log(palindrome(str))