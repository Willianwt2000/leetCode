function checkVowel(string, position) {
  // good luck
  let flagPosition = false;
  if (position > string.length) {
    console.log(" this position does not exist");
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    string = string.toLowerCase();
    if (
      string[position] === "a" ||
      string[position] === "e" ||
      string[position] === "i" ||
      string[position] === "o" ||
      string[position] === "u"
    ) {

      console.log(`Position ${position} it is a vowel`);
      flagPosition = true;
    }else if (position !== "a" ||
      string[position] !== "e" ||
      string[position] !== "i" ||
      string[position] !== "o" ||
      string[position] !== "u") {
        
        console.log(`Position ${position} it is Not a vowel`);
        flagPosition = false;

  } 
  } 

  return flagPosition;
}
