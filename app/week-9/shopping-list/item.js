'use client'
import React from 'react';

const Item = ({ name, quantity, category, onSelect, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{quantity} - {category}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSelect}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded"
        >
          View
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;



