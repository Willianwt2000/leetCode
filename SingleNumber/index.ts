//XOR operator
function singleNumber(nums: number[]): number {

  let uniqueNumber: number = 0;

  for (let i = 0; i < nums.length; i++) {
    uniqueNumber ^= nums[i]
    
  }

  
  return uniqueNumber
};


console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([4,1,2,1,2])); // 4
