// Debounce Function

function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Example function
function sayHello(name: string) {
  console.log("Hello", name);
}

// Create debounced function
const debouncedHello = debounce(sayHello, 1000);

// Example calls
debouncedHello("Rezanur");
debouncedHello("Rezanur");
debouncedHello("Rezanur");