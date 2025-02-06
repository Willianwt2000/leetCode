var x = 121;
function isPalindrome(x) {
    var isPalindrome = x.toString();
    isPalindrome = isPalindrome.split("").reverse().join("");
    var palindrome = isPalindrome === x.toString();
    if (palindrome) {
        console.log(isPalindrome);
    }
    return palindrome;
}
;
console.log(isPalindrome(121));
