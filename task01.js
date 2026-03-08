"use strict";
// Remove Duplicate Objects
function removeDuplicates(items) {
    const unique = new Map();
    items.forEach((item) => {
        if (!unique.has(item.id)) {
            unique.set(item.id, item);
        }
    });
    return Array.from(unique.values());
}
// Example
const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];
console.log(removeDuplicates(data));
