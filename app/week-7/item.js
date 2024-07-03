import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div 
      className="bg-gray-900 rounded my-3 p-1 w-1/2 ml-0.5 "
      onClick={onSelect}
    >
      <div className="font-bold">{name}</div>
      <div className="text-xs">Buy {quantity} in {category}</div>
    </div>
  );
};

export default Item;
