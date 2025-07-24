function reverseString(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var aux = s[left];
        s[left] = s[right];
        s[right] = aux;
        left++;
        right--;
    }
}
;
console.log(reverseString(["h", "e", "l", "l", "o"]));
