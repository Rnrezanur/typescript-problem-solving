// Deep Clone Object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// Example input
var original = {
    name: "Rezanur",
    age: 23,
    address: {
        city: "Dhaka"
    }
};
var copy = deepClone(original);
// Modify copy
copy.address.city = "Pabna";
// Output
console.log("Original:", original);
console.log("Copy:", copy);
