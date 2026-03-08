function searchUsers(users, keyword) {
    var key = keyword.toLowerCase();
    return users.filter(function (user) {
        return user.name.toLowerCase().includes(key) ||
            user.username.toLowerCase().includes(key) ||
            user.email.toLowerCase().includes(key);
    });
}
// Example input
var users = [
    { name: "Alice", username: "alice123", email: "alice@gmail.com" },
    { name: "Bob", username: "bob321", email: "bob@gmail.com" },
    { name: "Charlie", username: "charlie777", email: "charlie@gmail.com" }
];
// Example output
console.log(searchUsers(users, "alice"));
