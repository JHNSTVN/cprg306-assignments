"use client"
import React, { useState, useEffect } from 'react';
import Item from './item.js';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [sortedItems, setSortedItems] = useState([itemsData]);

  useEffect(() => {
    sortItems(sortBy);
  }, [sortBy]);

  const sortItems = (sortKey) => {
    const itemsToSort = [itemsData];
    itemsToSort.sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortKey === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
    setSortedItems(itemsToSort);
  };

  return (
    <div>
      <button
        onClick={() => setSortBy('name')}
        className={`w-full h-12 ${sortBy === 'name' ? 'bg-blue-950' : 'bg-blue-700'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5`}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        className={`w-full h-12 ${sortBy === 'category' ? 'bg-blue-950' : 'bg-blue-700'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5`}
      >
        Sort by Category
      </button>
      <ul className="list-disc pl-5">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

