function validPalindrome(s) {
    var cleanedString = "";
    s = s.toLowerCase();
    for (var i = 0; i < s.length; i++) {
        var character = s[i];
        if ((character >= "a" && character <= "z") ||
            (character >= "0" && character <= "9")) {
            cleanedString += character;
        }
    }
    if (cleanedString.length <= 1) {
        return true;
    }
    var left = 0;
    var right = cleanedString.length - 1;
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(validPalindrome("aba")); //true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false


//