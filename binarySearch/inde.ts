function search(nums: number[], target:number) {

 let left:number = 0;
 let right: number = nums.length - 1;


 while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  console.log(mid)

  if (nums[mid] === target) {
    console.log(mid)
    return mid;
  }


  if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }

  
 }
 return -1
}

console.log(search([-1,0,3,5,9,12],2));
