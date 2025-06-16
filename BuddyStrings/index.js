function buddyStrings(s, goal) {
    var condition = true;
    s.length !== goal.length ? condition = false : condition = true;
    if (s === goal) {
        var charUnique = new Set(s.split(''));
        charUnique.size < s.length ? condition = true : condition = false;
    }
    var charDiferent = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            charDiferent.push(i);
            charDiferent.length > 2 ? condition = false : condition = true;
        }
    }
    return (charDiferent.length === 2 &&
        s[charDiferent[0]] === goal[charDiferent[1]] &&
        s[charDiferent[1]] === goal[charDiferent[0]]);
    ;
}
;
// console.log(buddyStrings("abcd", "cbad")); //true
// console.log(buddyStrings("abab", "baba")); //true
console.log(buddyStrings("ab", "ab")); //true
console.log(buddyStrings("aa", "aa")); //true
console.log(buddyStrings("abcaa", "abcbb")); //false
// console.log(buddyStrings("hello", "hlelo")); //true
