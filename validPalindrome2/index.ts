function validPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  if(palindromeVacano(s, start, end)) return true;

  while(start < end){
      if(s[start] !== s[end]){
          return palindromeVacano(s, start + 1, end) || palindromeVacano(s, start, end - 1)
      }
      start++;
      end--;
  }

  function palindromeVacano(word, start, end): boolean {
      while(start < end){
          if(word[start] !== word[end]){
              return false;
          } 
          start++;
          end--;
      }
      return true;
  }

  return false;

};