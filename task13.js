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
    { name: "Rezanur", username: "rezanur123", email: "rezanur@gmail.com" },
    { name: "Bin", username: "bin321", email: "bin@gmail.com" },
    { name: "Shamim", username: "shamim777", email: "shamim@gmail.com" }
];
// Example output
console.log(searchUsers(users, "rezanur"));
