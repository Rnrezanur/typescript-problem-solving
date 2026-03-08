// Check Anagram

function isAnagram(a: string, b: string): boolean {
  const str1 = a.split("").sort().join("");
  const str2 = b.split("").sort().join("");

  return str1 === str2;
}

console.log(isAnagram("listen", "silent"));