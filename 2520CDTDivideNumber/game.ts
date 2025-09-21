function countKeyChanges(s: string): number{
   s = s.toLowerCase();
  let count: number  = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] != s[i+1]) {
      count++;
      console.log(count)
    }
  }
  return count;
};


console.log(countKeyChanges("aAbBcC")) //2
console.log(countKeyChanges("AaAaAaaA")) //2