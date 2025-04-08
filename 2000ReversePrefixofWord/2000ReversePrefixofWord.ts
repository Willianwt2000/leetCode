function reversePrefix(word: string, ch: string): string {
  let i: number = 0;

  let saveChar: string[] = [];
  let restOfChars: string[] = [];

  while (word[i] !== ch) {
    // if (!word.includes(ch)) {
    //   return saveChar.join();
    // } else {
    //   saveChar.push(word[i]);
    //   i++;
    // }
  }

  for (let i = saveChar.length + 1; i < word.length; i++) {
    restOfChars.push(word[i]);
  }

  saveChar.push(ch);
  saveChar.reverse();
  for (let i = 0; i < restOfChars.length; i++) {
    saveChar.push(restOfChars[i]);
  }

  return saveChar.join();
}

console.log(reversePrefix("abcdefd", "d")); // "dcbaefd"
console.log(reversePrefix("abcd", "z")); // "dcbaefd"
