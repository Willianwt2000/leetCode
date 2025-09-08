function firstPalindrome(words: string[]): string {
    for (let i = 0; i < words.length; i++) {
    let palabra: string = words[i];
    let esPalindromo: boolean = true;
    for (let j = 0; j < palabra.length / 2; j++) {
      let left:string = palabra[j];
      let right: string = palabra[palabra.length - 1 -j];
      if (left !== right) {
        esPalindromo = false;
        break;
      }
    }
    if (esPalindromo) {
      return palabra;
    }
  }

  return "";
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));