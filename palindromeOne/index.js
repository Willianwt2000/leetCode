function isPalindrome(s) {
    var originalS = s.toLowerCase();
    var cleanReverseString = "";
    var cleanOriginalString = "";
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    for (var i = originalS.length - 1; i >= 0; i--) {
        var character = originalS[i];
        if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
            cleanReverseString += character;
        }
    }
    for (var j = 0; j < originalS.length; j++) {
        var character = originalS[j];
        if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
            cleanOriginalString += character;
        }
    }
    return cleanOriginalString === cleanReverseString;
}
// Example usage:
console.log("\"A man, a plan, a canal: Panama\" is palindrome: ".concat(isPalindrome("A man, a plan, a canal: Panama"))); // true
console.log("\"carrera de coches\" is palindrome: ".concat(isPalindrome("carrera de coches"))); // false
console.log("\" \" is palindrome: ".concat(isPalindrome(" "))); // true
console.log("\"0P\" is palindrome: ".concat(isPalindrome("0P"))); // false
