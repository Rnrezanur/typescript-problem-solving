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
  { name: "Alice", username: "alice123", email: "alice@gmail.com" },
  { name: "Bob", username: "bob321", email: "bob@gmail.com" },
  { name: "Charlie", username: "charlie777", email: "charlie@gmail.com" }
];

// Example output
console.log(searchUsers(users, "alice"));