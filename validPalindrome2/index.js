function validPalindrome(s) {
    var flag = false;
    var original = s.split("");
    var iSreverse = s.split("").reverse();
    console.log(original);
    console.log(iSreverse);
    function isPalindrome(original, iSreverse) {
        if (original === iSreverse) {
            flag = true;
        }
        return flag;
    }
    console.log(isPalindrome(original, iSreverse));
    return flag;
}
console.log(validPalindrome("abc"));
