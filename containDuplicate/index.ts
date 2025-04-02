/**
  217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true


 */

function containsDuplicate(nums: number[]): boolean {
  const seen: {[key: number]: boolean} = {};
  
  for (const num of nums) {
      if (seen[num]) {
          return true;
      }
      seen[num] = true;
  }
  
  return false;
}
// buscar el los numeros repetidos
// si aparece varias  veces retornar true
//si son dclg

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true

console.log(containsDuplicate([3,3])); //true
