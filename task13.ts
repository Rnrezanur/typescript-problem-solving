interface UserSearch {
  name: string;
  username: string;
  email: string;
}

function searchUsers(users: UserSearch[], keyword: string): UserSearch[] {
  const key = keyword.toLowerCase();

  return users.filter(user =>
    user.name.toLowerCase().includes(key) ||
    user.username.toLowerCase().includes(key) ||
    user.email.toLowerCase().includes(key)
  );
}

// Example input
const users: UserSearch[] = [
  { name: "Rezanur", username: "rezanur123", email: "rezanur@gmail.com" },
  { name: "Bin", username: "bin321", email: "bin@gmail.com" },
  { name: "Shamim", username: "shamim777", email: "shamim@gmail.com" }
];

// Example output
console.log(searchUsers(users, "rezanur"));