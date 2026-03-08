// Longest Unique Substring


function longestUniqueSubstring(str: string): string {
  let result = "";
  let current = "";

  for (const char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }

    current += char;

    if (current.length > result.length) {
      result = current;
    }
  }

  return result;
}

console.log(longestUniqueSubstring("abcabcbb"));