// Flatten Nested Array
function flattenArray(arr) {
    return arr.reduce(function (acc, val) {
        return Array.isArray(val)
            ? acc.concat(flattenArray(val))
            : acc.concat(val);
    }, []);
}
console.log(flattenArray([1, [2, 3], [4, [5]]]));
