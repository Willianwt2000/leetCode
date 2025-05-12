//Excersise link --- https://leetcode.com/problems/contains-duplicate-ii/submissions/1632272978/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numIndices: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in numIndices && Math.abs(i - numIndices[num]) <= k) {
      return true;
    }
    numIndices[num] = i;
  }

  return false;
}


