function findClosest(x: number, y: number, z: number): number {
  let person1: number = z - x;
  let person2: number = z - y;
  if (Math.abs(person1) < Math.abs(person2)) {
    return 1;
  }
  if (Math.abs(person2) < Math.abs(person1)) {
    return 2;
  }
  return 0
};






console.log(findClosest(2,7,4)) //1
console.log(findClosest(2,5,6)) //2
console.log(findClosest(1,5,3)) //0