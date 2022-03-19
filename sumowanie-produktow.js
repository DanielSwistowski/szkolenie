const products = [
  { name: 'Bananas', pricePerUnit: 1.49, quantity: 2 },
  { name: 'Bread', pricePerUnit: 3.29, quantity: 1 },
  { name: 'Chocolate', pricePerUnit: 5, quantity: 2 },
];

function sumItems() {
  return products.map((p) => p.pricePerUnit * p.quantity).reduce((a, b) => a + b);
}

console.log(sumItems());
