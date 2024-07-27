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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full h-12 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded mb-4 border border-gray-300"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full h-12 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded mb-4 border border-gray-300"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
        <select 
          className="w-full h-12 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded mb-4 border border-gray-300"
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
          className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;

