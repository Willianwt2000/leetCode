function ages(nums:number[], target:number) {
  let min:number = 0;
  let max: number = nums.length - 1

 while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (nums[guess] === target ) {
      console.log(guess)
      return guess;
    }

    if (nums[guess] < target) {
      min = guess + 1;
      console.log(min)
    } else {
       max = guess - 1;
    }
  }

  return min
}

console.log(ages([1,3,5,6],7))
