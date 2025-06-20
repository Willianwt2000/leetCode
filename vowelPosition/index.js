function checkVowel(text, position) {
    if (position < 0 || position >= text.length) {
        console.log("This position does not exist.");
        return false;
    }
    var lowerCaseText = text.toLowerCase();
    var character = lowerCaseText[position];
    // Define vowels for easy lookup
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // Check if the character at the given position is a vowel
    if (vowels.has(character)) {
        console.log("Position ".concat(position, " it is a vowel"));
        return true;
    }
    else {
        console.log("Position ".concat(position, " it is Not a vowel"));
        return false;
    }
}
console.log(checkVowel("cat", 1));
