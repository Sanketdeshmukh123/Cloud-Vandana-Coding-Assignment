function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
}

// Get user input for the sentence
const inputSentence = prompt("Enter a sentence: ");
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
