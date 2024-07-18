import { useState } from 'react';
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
];
const Practice = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  return (
    <div className="App">
    <h1>Product List</h1>
    <div>
      <label>Min Price: {minPrice}</label>
      <input
        type="range"
        min="0"
        max="500"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <label>Max Price: {maxPrice}</label>
      <input
        type="range"
        min="0"
        max="500"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
    </div>
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  </div>

  );
};

export default Practice;
