"use strict";
// Debounce Function
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
// Example function
function sayHello(name) {
    console.log("Hello", name);
}
// Create debounced function
const debouncedHello = debounce(sayHello, 1000);
// Example calls
debouncedHello("Rezanur");
debouncedHello("Rezanur");
debouncedHello("Rezanur");
