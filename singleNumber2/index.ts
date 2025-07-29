function singleNumber(nums: number[]): number | undefined{
  let frecuencia: Map<number, number> = new Map();

  for (const num of nums) {
    if (frecuencia.has(num)) {
      frecuencia.set(num, frecuencia.get(num)!  + 1 );
    } else {
      frecuencia.set(num, 1)
    }
  }


  for (const [key, value] of frecuencia) {
    if (value === 1) {
      return key
    }
  }
  return undefined;
};




console.log(singleNumber([2,2,3,2]));

console.log(singleNumber([0,1,0,1,0,1,99]));