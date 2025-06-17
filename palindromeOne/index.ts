function isPalindrome(s: string): boolean {

  let originalS: string = s.toLowerCase();

  let cleanReverseString: string = "";
  let cleanOriginalString: string = "";
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  for (let i = originalS.length - 1; i >= 0; i--) {
    const character: string = originalS[i]; 
    if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
      cleanReverseString += character;
    }
  }
  
  for (let j = 0; j < originalS.length; j++) {
    const character: string = originalS[j];
          if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
       cleanOriginalString += character;
      }
  }
  

  return cleanOriginalString === cleanReverseString;
}

