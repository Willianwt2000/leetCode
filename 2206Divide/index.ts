function divideArray(nums: number[]): boolean {
  const frecuencia = new Map<number, number>();
  for (const num of nums) {
    if (frecuencia.has(num)) {
      frecuencia.set(num, frecuencia.get(num)! + 1);
    } else {
      frecuencia.set(num, 1);
    }
  }
  for (const [key, value] of frecuencia) {
    if (value % 2 != 0) {
      return false
    }
  }
  return true;
}