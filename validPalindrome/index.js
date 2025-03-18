/**
 
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 */
function isPalindrome(s) {
    var right = s.toUpperCase();
    console.log("this is the rignt ".concat(right));
    var cleandPharase = right.replace(/[^A-Z0-9]/g, "");
    var REVERSEPHRASE = cleandPharase.split("").reverse().join("");
    return cleandPharase === REVERSEPHRASE;
}
;
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //* false
console.log(isPalindrome(" ")); // ?true
