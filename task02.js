"use strict";
// Group Users by Role
function groupByRole(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.role]) {
            acc[user.role] = [];
        }
        acc[user.role].push(user);
        return acc;
    }, {});
}
// Example
const users = [
    { id: 1, name: "A", role: "admin" },
    { id: 2, name: "B", role: "user" },
    { id: 3, name: "C", role: "admin" }
];
console.log(groupByRole(users));
