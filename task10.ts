// Palindrome Checker

function isPalindrome(sentence: string): boolean {
  const clean = sentence.toLowerCase().replace(/\s/g, "");
  const reversed = clean.split("").reverse().join("");

  return clean === reversed;
}

console.log(isPalindrome("A man a plan a canal Panama"));