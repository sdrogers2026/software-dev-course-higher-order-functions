/*
========================================================
🛒 Higher-Order Functions: Product Utilities
========================================================

Objective:
Students will create and work with higher-order functions
to transform and manipulate product data.

They will:
- Write higher-order functions that accept callbacks
- Practice returning functions from higher-order functions
- Use map(), filter(), and reduce()
*/

// ======================================================
// 🍞 Starting Dataset: Product List
// ======================================================

const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }
];

// ======================================================
// 🔧 Tasks
// ======================================================

// ------------------------------------------------------
// Task 1: Filter Products by Availability
// ------------------------------------------------------

const filterProducts = (products, callback) => products.filter(callback);

const filteredProducts = filterProducts(
    products,
    (product) => product.inStock
);

// ------------------------------------------------------
// Task 2: Transform Product Names
// ------------------------------------------------------

const uppercaseNames = products.map(
    (product) => product.name.toUpperCase()
);

// ------------------------------------------------------
// Task 3: Generate Discounted Prices
// ------------------------------------------------------

const applyDiscount = (discountPercent) => (product) => {
    product.discountedPrice =
        product.price * (1 - discountPercent / 100);
};

const discount = applyDiscount(20);

products.forEach(discount);

// ------------------------------------------------------
// Task 4: Calculate Total Inventory Value
// ------------------------------------------------------

const totalInventoryValue = products.reduce(
    (total, product) =>
        product.inStock ? total + product.price : total,
    0
);

// ======================================================
// 🧪 Console Test Your Work
// ======================================================

console.log("Filtered products:", filteredProducts);
console.log("Uppercased names:", uppercaseNames);
console.log("Discounted products:", products);
console.log("Total value in stock:", totalInventoryValue);
