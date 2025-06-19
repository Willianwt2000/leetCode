function validPalindrome(s: string): boolean {
  /* 
    1-verificar que si es palindromo
    2-iterar el string y e ir borrando un caracter y por cada caracter
        borrado verificar si es palindromo si -- no falso
    3- 
    4-
   
   */
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      let left1 = left + 1;
      let right1 = right;
      let ispalindro = true;

      while (left1 < right1) {
        if (s[left1] !== s[right1]) {
          ispalindro = false;
          break;
        }
        left1++;
        right1--;
      }

      let leftt: number = left;
      let rightt: number = right - 1;

      let ispalindro2 = true;

      while (leftt < rightt) {
        if (s[leftt] !== s[rightt]) {
          ispalindro2 = false;
          break;
        }
        leftt++;
        rightt--;
      }

      return ispalindro || ispalindro2;
    }
    left++;
    right--;
  }


  return true;
}