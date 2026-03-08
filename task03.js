// Find Missing Number
function findMissingNumber(arr) {
    var n = arr.length + 1;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = arr.reduce(function (sum, num) { return sum + num; }, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5, 6]));
