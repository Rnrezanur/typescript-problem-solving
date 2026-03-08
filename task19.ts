// Top K Frequent Numbers

function topKFrequent(nums: number[], k: number): number[] {
  const count: Record<number, number> = {};

  nums.forEach(n => {
    count[n] = (count[n] || 0) + 1;
  });

  return Object.keys(count)
    .sort((a, b) => count[Number(b)] - count[Number(a)])
    .slice(0, k)
    .map(Number);
}

console.log(topKFrequent([1,1,1,2,2,3],2));