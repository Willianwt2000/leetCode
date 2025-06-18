  function validPalindrome(s: string): boolean{
  let cleanedString: string = "";
  s = s.toLowerCase(); 

  for (let i = 0; i < s.length; i++) {
    const character: string = s[i];

    if (
      (character >= "a" && character <= "z") ||
      (character >= "0" && character <= "9")
    ) {
      cleanedString += character; 
    }
  }


  if (cleanedString.length <= 1) {
    return true;
  }

  let left: number = 0;
  let right: number = cleanedString.length - 1;
  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}



// console.log(validPalindrome("aba")); //true
console.log(validPalindrome("abca"));// true
// console.log(validPalindrome("abc")); // false
