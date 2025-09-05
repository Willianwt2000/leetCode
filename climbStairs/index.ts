function climbStairs(n: number): number {
  let num1: number[] = [];
  let num2: number[] = [];
  for (let i = 1; i <= n - 1; i++) {
    console.log(`Numbers: ${i}`)
    num1.push(i)
    num2.push(i)
    
  }

  console.log(num1)
  console.log(num2)
  return 0;
};



console.log(climbStairs(3))