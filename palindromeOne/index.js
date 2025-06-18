// function isPalindrome(s: string): boolean {
//   let originalS: string = s.toLowerCase();
//   let cleanReverseString: string = "";
//   let cleanOriginalString: string = "";
//   if (s.length === 0 || s.length === 1) {
//     return true;
//   }
//   for (let i = originalS.length - 1; i >= 0; i--) {
//     const character: string = originalS[i]; 
//     if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
//       cleanReverseString += character;
//     }
//   }
//   for (let j = 0; j < originalS.length; j++) {
//     const character: string = originalS[j];
//           if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
//        cleanOriginalString += character;
//       }
//   }
//   return cleanOriginalString === cleanReverseString;
//}
//https://leetcode.com/problems/valid-palindrome/submissions/1666737777/
//* Optimized
function isPalindrome(s) {
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
console.log(isPalindrome("ana"));
console.log(isPalindrome("nanan"));
console.log(isPalindrome("juana"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("raceacar"));
