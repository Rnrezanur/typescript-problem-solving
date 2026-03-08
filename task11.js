"use strict";
function mergeArrays(arr1, arr2) {
    const map = new Map();
    [...arr1, ...arr2].forEach(item => {
        map.set(item.id, Object.assign(Object.assign({}, map.get(item.id)), item));
    });
    return Array.from(map.values());
}
// Example input
const arr1 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
const arr2 = [
    { id: 1, age: 25 },
    { id: 2, age: 30 }
];
// Example output
console.log(mergeArrays(arr1, arr2));
