"use strict";
// Sort Users by Age and Name
function sortUsers(users) {
    return users.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age;
    });
}
const people = [
    { name: "Rezanur", age: 25 },
    { name: "Bin", age: 25 },
    { name: "Shamim", age: 20 }
];
console.log(sortUsers(people));
