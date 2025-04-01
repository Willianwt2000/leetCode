function missingNumber(nums: number[]): number {

  let missingNum: number = 0;
  
  //organizar mi arreglo
  nums.sort((a,b) => (a-b));

  // retornar el que me falta
  
  //iterar sobre arreglo organizado
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i] , i)
    if (nums[i] !== i) {
      missingNum = i;
      break
    } else {
      missingNum = nums[i] + 1;
    }
      
    }

    return missingNum;
};



console.log(missingNumber([3,0,1])) //2
console.log(missingNumber([0,1])) //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8
console.log(missingNumber([1,2])) // 0