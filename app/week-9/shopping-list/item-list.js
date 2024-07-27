'use client'
import React, { useState } from 'react';
import Item from './item.js';
import { deleteItem } from '../_services/shopping-list-service';

const ItemList = ({ items, onItemSelect, onItemDelete }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      onItemDelete(id); // Notify parent component of the deletion
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setSortBy('name')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Sort by Category
        </button>
      </div>
      <ul className="list-disc pl-5">
        {sortedItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-lg shadow-sm">
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
              onDelete={() => handleDelete(item.id)} // Pass onDelete handler
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


