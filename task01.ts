interface Item {
  id: number;
  name: string;
}

function removeDuplicates(items: Item[]): Item[] {
  const unique = new Map<number, Item>();

  items.forEach((item) => {
    if (!unique.has(item.id)) {
      unique.set(item.id, item);
    }
  });

  return Array.from(unique.values());
}

// Example
const data: Item[] = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

console.log(removeDuplicates(data));