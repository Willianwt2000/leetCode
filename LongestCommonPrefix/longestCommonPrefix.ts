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

function longestCommonPrefix(strs: string[]): string {

  let commonPrefix: string = strs[0]|| "";
  
  for (let i = 0; i < strs.length; i++) {
    console.log(commonPrefix[i])
    
  }

   return commonPrefix;
};


console.log(longestCommonPrefix(["flower","flow","flight"]))