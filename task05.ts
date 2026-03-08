// Sort Users by Age and Name

interface Person {
  name: string;
  age: number;
}

function sortUsers(users: Person[]): Person[] {
  return users.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
}

const people: Person[] = [
  { name: "John", age: 25 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 }
];

console.log(sortUsers(people));