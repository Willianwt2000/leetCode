function reversePrefix(word, ch) {
    var i = 0;
    var j = 0;
    var saveChar = [];
    var restOfChars = [];
    var completeWord = [];
    while (word[i] !== ch) {
        if (!word.includes(ch)) {
            return saveChar.join();
        }
        else {
            saveChar.push(word[i]);
            i++;
        }
    }
    for (var i_1 = saveChar.length + 1; i_1 < word.length; i_1++) {
        restOfChars.push(word[i_1]);
    }
    saveChar.push(ch);
    saveChar.reverse();
    for (var i_2 = 0; i_2 < restOfChars.length; i_2++) {
        saveChar.push(restOfChars[i_2]);
    }
    return saveChar.join();
}
console.log(reversePrefix("abcdefd", "d")); // "dcbaefd"
console.log(reversePrefix("abcd", "z")); // "dcbaefd"
