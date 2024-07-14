'use client'
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    onAddItem(item);
    setName(''); 
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-64">
        <input
          className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
        <select 
            className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
        <button
          className="w-full h-12 bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          type="submit"> Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;