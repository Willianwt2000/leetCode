function threeConsecutiveOdds(arr: number[]): boolean {
    
  let count: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
      if (count === 3) {
        return true
      }
    } else {
      count = 0
    }
  }

  if (count < 3) return false
  return false;
};



console.log(threeConsecutiveOdds([2,6,4,1])) //false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])) //true
console.log(threeConsecutiveOdds([1,2,1,1])) //false