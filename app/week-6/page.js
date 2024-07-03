'use client'
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

  return (
    <main className="bg-grey-900">
      <h1 className="text-2xl text-white font-bold p-1">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
};

export default Page;