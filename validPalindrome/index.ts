/**
 
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 */


function isPalindrome(s: string): boolean {
 let right = s.toUpperCase();
 const cleandPharase = right.replace(/[^A-Z0-9]/g, "");
 const REVERSEPHRASE = cleandPharase.split("").reverse().join("");
 return cleandPharase === REVERSEPHRASE

};



