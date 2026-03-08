"use strict";
// Most Frequent Word
function mostFrequentWord(text) {
    const words = text.split(" ");
    const count = {};
    words.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });
    let maxWord = "";
    let maxCount = 0;
    for (const word in count) {
        if (count[word] > maxCount) {
            maxCount = count[word];
            maxWord = word;
        }
    }
    return maxWord;
}
console.log(mostFrequentWord("javascript is powerful and javascript is popular"));
