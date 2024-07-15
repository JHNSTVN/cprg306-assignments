'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from './../_utils/auth-context'; 
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    router.push('/');
    return null;
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const name = item.name.split(',')[0].trim();
    setSelectedItemName(name);
  };

  return (
    <main className="bg-grey-900 flex">
      <div className="w-1/2">
        <h1 className="text-2xl text-white font-bold p-1">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>
      <div className="w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
};

export default Page;


