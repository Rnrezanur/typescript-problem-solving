// Top K Frequent Numbers
function topKFrequent(nums, k) {
    var count = {};
    nums.forEach(function (n) {
        count[n] = (count[n] || 0) + 1;
    });
    return Object.keys(count)
        .sort(function (a, b) { return count[Number(b)] - count[Number(a)]; })
        .slice(0, k)
        .map(Number);
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
