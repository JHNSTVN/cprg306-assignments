'use client';
import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div 
      className="bg-gray-100 rounded-lg p-4 mb-2 cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={onSelect}
    >
      <div className="font-bold text-gray-800">{name}</div>
      <div className="text-sm text-gray-600">Buy {quantity} in {category}</div>
    </div>
  );
};

export default Item;
