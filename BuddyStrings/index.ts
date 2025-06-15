function buddyStrings(s: string, goal: string): boolean {
  let condition: boolean = true;
  //Primera condición: Las longitudes de s y goal deben ser iguales.
  //Segunda condición: Si s y goal ya son iguales, pero necesitamos intercambiar dos letras iguales en s para que siga igual.
  //Tercera condición: Debemos encontrar exactamente dos posiciones donde s y goal tengan letras diferentes, y estas letras deben ser inversas.
  
  //Si la longitud de s y goal son diferentes -- retornar falso
  if (s.length !== goal.length) {
    return false;
  } 
  
  let diferent: number[] = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diferent.push(i)
       diferent.length > 2 ? condition = false : condition = true;
      }

    }

    



    console.log(diferent)
    return condition;

};


console.log(buddyStrings("abcd", "cbad")); //true
console.log(buddyStrings("abab", "baba")); //true
// console.log(buddyStrings("hello", "hlelo")); //true