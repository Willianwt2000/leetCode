// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input str
function longestCommonPrefix(strs) {
    var prefix = "";
    for (var i = 0; i < strs[0].length; i++) {
        var character = strs[0][i];
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character)
                return prefix;
        }
        prefix += character;
    }
    return prefix;
}
;
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
