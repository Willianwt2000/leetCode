//find words containing
/*
  You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 

Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
Example 2:

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
Example 3:

Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array
 */
function findWordsContaining(words, x) {
    var posiciones = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            posiciones.push(i);
        }
        //  for (let j = 0; j < words[i].length; j++) {
        //   if (words[i][j] === x) { //le
        //     posiciones.push(i)
        //     break;
        //   }
        //  } 
    }
    return posiciones;
}
;
console.log(findWordsContaining(["leet", "code"], "e")); //[0,1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")); //[0,2]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z")); // []
