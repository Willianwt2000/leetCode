function numberGame(nums: number[]): number[] {
  nums.sort((a,b) => a-b);

  let arrFirstly: number[] = [];

  for (let i = 0; i < nums.length; i+=2) {

    let alice:number = nums[i];
    let bob:number = nums[i+1];
    arrFirstly.push(bob)
    arrFirstly.push(alice)
  }
  // console.log(nums);
  return arrFirstly;
}

console.log(numberGame([5,4,2,3])); //[3,2,5,4]
console.log(numberGame([4, 2, 6, 6, 9, 7])); //[4,2,6,6,9,7]

