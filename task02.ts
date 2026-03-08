// Group Users by Role

interface User {
  id: number;
  name: string;
  role: string;
}

function groupByRole(users: User[]): Record<string, User[]> {
  return users.reduce((acc, user) => {
    if (!acc[user.role]) {
      acc[user.role] = [];
    }

    acc[user.role].push(user);
    return acc;
  }, {} as Record<string, User[]>);
}

// Example
const users: User[] = [
  { id: 1, name: "A", role: "admin" },
  { id: 2, name: "B", role: "user" },
  { id: 3, name: "C", role: "admin" }
];

console.log(groupByRole(users));