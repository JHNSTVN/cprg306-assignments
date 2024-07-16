'use client'
import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import { useUserAuth } from './../_utils/auth-context'; 
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './item';

const Page = ({ router }) => {
  const { user } = useUserAuth();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
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

export default withRouter(Page);


