/*
  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in
 */

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let uniquePoint = 0;

    for (let i = 0; i < nums.length; i++) {

      if (nums[i] !== nums[uniquePoint]) {
        uniquePoint++;
        nums[uniquePoint] = nums[i];

      
      }
      
    }

    return uniquePoint + 1;
};



console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))