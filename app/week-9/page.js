'use client'
import React, { useEffect, useState } from 'react';
import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';
import ItemList from './shopping-list/item-list';
import NewItem from './shopping-list/new-item';
import MealIdeas from './shopping-list/meal-ideas';
import { getItems, addItem, deleteItem } from './_services/shopping-list-service';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);

    useEffect(() => {
        if (user) {
            const loadItems = async () => {
                try {
                    const userItems = await getItems(user.uid); 
                    setItems(userItems);
                } catch (error) {
                    console.error('Error loading items: ', error);
                }
            };

            loadItems();
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
            router.push('/week-9');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleAddItem = async (newItem) => {
        try {
            const id = await addItem(user.uid, newItem); 
            setItems(prevItems => [...prevItems, { ...newItem, id }]);
        } catch (error) {
            console.error('Error adding item: ', error);
        }
    };

    const handleItemSelect = (item) => {
        const name = item.name.split(',')[0].trim();
        setSelectedItemName(name);
    };

    const handleItemDelete = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id)); 
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
                <h1 className="text-4xl font-extrabold mb-6 text-black">Hello and Welcome!</h1>
                <p className="text-lg mb-6 text-gray-600">To proceed, please log in with GitHub.</p>
                <button
                    onClick={gitHubSignIn}
                    className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Log in with GitHub
                </button>
            </div>
        );
    }

    return (
        <main className="bg-gray-900 min-h-screen flex flex-col">
            <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
                <h1 className="text-3xl text-white font-bold">Shopping List</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Log Out
                </button>
            </header>
            <div className="flex flex-1">
                <section className="w-1/2 p-4 border-r border-gray-700">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} onItemDelete={handleItemDelete} />
                </section>
                <section className="w-1/2 p-4">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </section>
            </div>
        </main>
    );
};

export default Page;
