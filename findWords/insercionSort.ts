
let arreglo: number[] = [5,8,9,6,3];


function inserctionSort(nums:number[]): number[]{
  // let orderArray: number[] = []
  // nums[1] = 3
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i]; //8,9
    let j = i-1; //0

    while (j >= 0 && nums[j] > key) { // 0 > 0  -----  
      nums[j+1] = nums[j]
      j = j - 1;
    }
    nums[j+1] = key; // [8]
    
  }



  return nums;
}


console.log(inserctionSort(arreglo))