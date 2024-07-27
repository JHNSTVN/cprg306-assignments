import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(itemsCollection);
  const itemsList = itemsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return itemsList;
};

export const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
};

export const deleteItem = async (itemId) => {
    try {
      const itemRef = doc(db, `users/${userId}/items/${itemId}`);
      await deleteDoc(itemRef);
    } catch (error) {
      console.error("Error deleting item: ", error);
      throw error;
    }
  };