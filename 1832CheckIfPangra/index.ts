// function checkIfPangram(sentence) {
//   let str = new Set(sentence.split(""));
//   const englishAlphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let charAlphabet = new Set(englishAlphabet);
//   return charAlphabet.size === str.size;
// }



function checkIfPangram(sentence: string) {
  let charAlphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(''));
  return charAlphabet.size === new Set(sentence.split("")).size;
}
//1ms


// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
// console.log(checkIfPangram("leetcode"));
// console.log(checkIfPangram("anmt"));
// console.log(checkIfPangram("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo"));
