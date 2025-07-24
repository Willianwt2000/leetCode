function reverseString(s: string[]): void {
    let left: number = 0;
    let right: number = s.length -1;


    while (left < right) {
      let aux: string = s[left];
      s[left] = s[right];
      s[right] = aux;

      left++;
      right--
    }
};

 console.log(reverseString( ["h","e","l","l","o"]))