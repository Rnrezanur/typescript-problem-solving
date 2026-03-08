var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeArrays(arr1, arr2) {
    var map = new Map();
    __spreadArray(__spreadArray([], arr1, true), arr2, true).forEach(function (item) {
        map.set(item.id, __assign(__assign({}, map.get(item.id)), item));
    });
    return Array.from(map.values());
}
// Example input
var arr1 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
var arr2 = [
    { id: 1, age: 25 },
    { id: 2, age: 30 }
];
// Example output
console.log(mergeArrays(arr1, arr2));
