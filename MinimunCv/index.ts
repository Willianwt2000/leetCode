function getCommon(nums1: number[], nums2: number[]): number {
  //agregar los elementos en un grupo hash seria el 2

  let firstGroup = new Set<number>(nums2);
  console.log(firstGroup);

  // iterar sobre num1 y revisar si cada elemento existe en el grupo 2
  for (const num of nums1) {
    // hacer match
    if (firstGroup.has(num)) {
      return num;
    }
  }

  // de lo contrario devuelve menos 1

  return 0;
}

console.log(getCommon([1, 2, 3], [2, 4]));
