// Most Frequent Word

function mostFrequentWord(text: string): string {
  const words = text.split(" ");

  const count: Record<string, number> = {};

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