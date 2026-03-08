// Aggregate Sales Data

interface Sale {
  product: string;
  amount: number;
}

function aggregateSales(data: Sale[]) {
  const productSales: Record<string, number> = {};
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
const salesData: Sale[] = [
  { product: "A", amount: 100 },
  { product: "B", amount: 200 },
  { product: "A", amount: 50 }
];

// Example output
console.log(aggregateSales(salesData));