// Deep Clone Object

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Example input
const original = {
  name: "Rezanur",
  age: 23,
  address: {
    city: "Dhaka"
  }
};

const copy = deepClone(original);

// Modify copy
copy.address.city = "Pabna";

// Output
console.log("Original:", original);
console.log("Copy:", copy);