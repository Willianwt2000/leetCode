function removeDuplicates(nums: number[]): number {


  for (let i = 0; i < nums.length; i++) {
     nums[i] += nums[i-1]
  }

 return numsl
    
};


console.log(removeDuplicates([1,1,2])) //[1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))// [0,1,2,3,4,_,_,_,_,_]
