"use strict";
// Pagination Function
function paginate(items, page, limit) {
    const start = (page - 1) * limit;
    const data = items.slice(start, start + limit);
    return {
        data,
        totalPages: Math.ceil(items.length / limit)
    };
}
// Example input
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example output
console.log(paginate(numbers, 2, 3));
