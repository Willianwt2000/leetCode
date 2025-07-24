function singleNumber(nums: number[]): number {
  nums.sort();

  console.log("Number: "+nums);

  let count: number = 0;
  let aux: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (aux === nums[i] && nums[i] === nums[i+1]) {
      console.log(object)
      count++;
    }

    
    
  }
  
  return 0;
};




console.log(singleNumber([2,2,3,2]));

console.log(singleNumber([0,1,0,1,0,1,99]));