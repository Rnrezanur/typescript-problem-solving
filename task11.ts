interface UserInfo {
  id: number;
  name?: string;
  age?: number;
}

function mergeArrays(arr1: UserInfo[], arr2: UserInfo[]): UserInfo[] {
  const map = new Map<number, UserInfo>();

  [...arr1, ...arr2].forEach(item => {
    map.set(item.id, { ...map.get(item.id), ...item });
  });

  return Array.from(map.values());
}

// Example input
const arr1: UserInfo[] = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const arr2: UserInfo[] = [
  { id: 1, age: 25 },
  { id: 2, age: 30 }
];

// Example output
console.log(mergeArrays(arr1, arr2));