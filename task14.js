// Pagination Function
function paginate(items, page, limit) {
    var start = (page - 1) * limit;
    var data = items.slice(start, start + limit);
    return {
        data: data,
        totalPages: Math.ceil(items.length / limit)
    };
}
// Example input
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example output
console.log(paginate(numbers, 2, 3));
