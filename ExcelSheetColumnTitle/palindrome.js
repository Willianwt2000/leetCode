const validPalindrome = (s: string): boolean => {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Caso 1: Intentar saltar el carácter de la izquierda
            let left1 = left + 1;
            let right1 = right;
            let isPali1 = true;
            while (left1 < right1) {
                if (s[left1] !== s[right1]) {
                    isPali1 = false;
                    break;
                }
                left1++;
                right1--;
            }

            // Caso 2: Intentar saltar el carácter de la derecha
            let left2 = left;
            let right2 = right - 1;
            let isPali2 = true;
            while (left2 < right2) {
                if (s[left2] !== s[right2]) {
                    isPali2 = false;
                    break;
                }
                left2++;
                right2--;
            }
            
            // Si cualquiera de los dos casos resulta en un palíndromo, es válido
            return isPali1 || isPali2;
        }
        left++;
        right--;
    }
    // Si el bucle termina, la cadena ya es un palíndromo
    return true;
};