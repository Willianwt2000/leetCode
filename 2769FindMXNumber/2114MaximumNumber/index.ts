function mostWordsFound(sentences: string[]): number {
  let counter: number = 0;
  let storage: number = 0;
  
  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === ' ') {
        counter++;
      }
    }
    if (storage < counter) {
      storage = counter;
    }
    counter = 0;
  }
  
  return storage + 1;
};

let sentences: string[] = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));