function validPalindrome(s) {
    /*
      1-verificar que si es palindromo
      2-iterar el string y e ir borrando un caracter y por cada caracter
          borrado verificar si es palindromo si -- no falso
      3-
      4-
     
     */
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            var left1 = left + 1;
            var right1 = right;
            var ispalindro = true;
            while (left1 < right1) {
                if (s[left1] !== s[right1]) {
                    ispalindro = false;
                    break;
                }
                left1++;
                right1--;
            }
            var leftt = 0;
            var rightt = s.length - 1;
            var ispalindro2 = true;
            while (leftt < rightt) {
                if (s[leftt] !== s[rightt]) {
                    ispalindro = false;
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
    //saltar el caracter a la derecha
    return true;
}
console.log(validPalindrome("abca"));
