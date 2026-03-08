// Aggregate Sales Data
function aggregateSales(data) {
    var productSales = {};
    var totalSales = 0;
    data.forEach(function (item) {
        totalSales += item.amount;
        productSales[item.product] = (productSales[item.product] || 0) + item.amount;
    });
    return {
        totalSales: totalSales,
        productSales: productSales
    };
}
// Example input
var salesData = [
    { product: "A", amount: 100 },
    { product: "B", amount: 200 },
    { product: "A", amount: 50 }
];
// Example output
console.log(aggregateSales(salesData));
