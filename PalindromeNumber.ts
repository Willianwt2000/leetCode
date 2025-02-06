
function isPalindrome(x: number): boolean {
  let isPalindrome: string = x.toString();
  isPalindrome = isPalindrome.split("").reverse().join("")

  let palindrome:boolean = isPalindrome === x.toString()
  if (palindrome) {
    console.log(isPalindrome)
   
  }
  return palindrome;

};

console.log(isPalindrome(121))