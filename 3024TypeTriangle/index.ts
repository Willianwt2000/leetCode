function triangleType(nums: number[]): string {
  nums.sort((a, b) => a - b);

  if (nums[0] + nums[1] <= nums[2]) {
    return "none";
  }

  if (nums[0] === nums[2]) {
    return "equilateral";
  } else if (nums[0] === nums[1] || nums[1] === nums[2] ) {
    return "isosceles";
  } else {
    return "scalene";
  } 
}

// console.log(triangleType([3, 3, 3])); // equilateral
// console.log(triangleType([3, 4, 5])); //scalene
// console.log(triangleType([3, 4, 3])); //isoceles
console.log(triangleType([9,4,9])); //"equilateral"
