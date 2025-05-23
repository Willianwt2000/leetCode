/**
  Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */


function lengthOfLastWord(s: string): number {
  let str: string[] = s.trim().split(" ");
  let stringLength: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] ) {
      stringLength =  str[i].length;
    }
  }
  return stringLength;
};


console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
console.log(lengthOfLastWord("a")); //6
