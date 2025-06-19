// function isPalindrome(s: string): boolean {

//   let originalS: string = s.toLowerCase();

//   let cleanReverseString: string = "";
//   let cleanOriginalString: string = "";
//   if (s.length === 0 || s.length === 1) {
//     return true;
//   }

//   for (let i = originalS.length - 1; i >= 0; i--) {
//     const character: string = originalS[i];
//     if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
//       cleanReverseString += character;
//     }
//   }

//   for (let j = 0; j < originalS.length; j++) {
//     const character: string = originalS[j];
//           if ((character >= "a" && character <= "z") || (character >= "0" && character <= "9")) {
//        cleanOriginalString += character;
//       }
//   }

//   return cleanOriginalString === cleanReverseString;
//}

//https://leetcode.com/problems/valid-palindrome/submissions/1666737777/

//* Optimized
function isPalindrome(s: string): boolean{
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

console.log(isPalindrome("ana"))
console.log(isPalindrome("nanan"))
console.log(isPalindrome("juana"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("raceacar"))




//FIZZBUZZ
function fizzBuzz(n: number): string[] {
  const acumulator: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      acumulator.push("FizzBuzz");
    } else if (i % 3 === 0) {
      acumulator.push("Fizz");
    } else if (i % 5 === 0) {
      acumulator.push("Buzz");
    } else {
      acumulator.push(i.toString());
    }
  }

  return acumulator;
}




console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
