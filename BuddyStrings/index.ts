// https://leetcode.com/problems/buddy-strings/submissions/1666501922

function buddyStrings(s: string, goal: string): boolean {
    let condition: boolean = true;
    if (s.length !== goal.length ) return condition = false;

    if (s === goal) {
        const charUnique = new Set(s.split(''));
        return charUnique.size < s.length;
    }

    let charDiferent: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            charDiferent.push(i)
            // charDiferent.length > 2 ? condition = false : condition = true;
        }

    }

    return (
        charDiferent.length === 2 &&
        s[charDiferent[0]] === goal[charDiferent[1]] &&
        s[charDiferent[1]] === goal[charDiferent[0]]
    );

};

// console.log(buddyStrings("abcd", "cbad")); //true
// console.log(buddyStrings("abab", "baba")); //true
console.log(buddyStrings("ab", "ab")); //true
console.log(buddyStrings("aa", "aa")); //true
console.log(buddyStrings("abcaa", "abcbb")); //false
// console.log(buddyStrings("hello", "hlelo")); //true
