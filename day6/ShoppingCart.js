import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input) {
      setCart([...cart, input]);
      setInput('');
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
