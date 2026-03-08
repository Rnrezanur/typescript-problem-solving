"use strict";
// Aggregate Sales Data
function aggregateSales(data) {
    const productSales = {};
    let totalSales = 0;
    data.forEach(item => {
        totalSales += item.amount;
        productSales[item.product] = (productSales[item.product] || 0) + item.amount;
    });
    return {
        totalSales,
        productSales
    };
}
// Example input
const salesData = [
    { product: "A", amount: 100 },
    { product: "B", amount: 200 },
    { product: "A", amount: 50 }
];
// Example output
console.log(aggregateSales(salesData));
