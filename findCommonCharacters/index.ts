function commonChars(words: string[]): string[] {
  let charRepeating: string[] = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i][j] === words[i][j+1]) {
        
      }
      
    }
  }
  return charRepeating;
}




console.log(commonChars(["bella", "label", "roller"])); //["e","l","l"]

console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]conm
