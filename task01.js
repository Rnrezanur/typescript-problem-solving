function removeDuplicates(items) {
    var unique = new Map();
    items.forEach(function (item) {
        if (!unique.has(item.id)) {
            unique.set(item.id, item);
        }
    });
    return Array.from(unique.values());
}
// Example
var data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];
console.log(removeDuplicates(data));
