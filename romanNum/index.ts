function romanToInt(s: string): number {
  const rNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };


  //count value
  let totalvalue: number = 0;

   for (let i = 0; i < s.length; i++) {
    //curret value
    let curretV: string = s[i]
    let curretValueSimbol  = romanToInt[curretV];

    let simbol = s[i + 1];
    let nextSimbol = romanToInt[simbol];

    

    if (nextSimbol < curretValueSimbol) {
      totalvalue -= curretValueSimbol;
    } else {
      totalvalue += curretValueSimbol
    }

    
   }





  return totalvalue;
}

// vl = v + l = 6 si la letra pequeña esta delante del mayor pues se suma.
//------
// lv = peque = l   -  mayor = v = 4  // si la letra pequeña esta detras del mayor pues se suma.

console.log(romanToInt("III")); //3
// console.log(romanToInt("LVIII")); //58
// console.log(romanToInt("MCMXCIV")); //58
