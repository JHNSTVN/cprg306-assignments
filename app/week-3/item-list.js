import Item from './Item.js';

const ItemList = () => {
  const items = [
    {
      name: "Milk, 4 L 🥛",
      quantity: 1,
      category: "Dairy",
    },
    {
      name: "Bread 🍞",
      quantity: 2,
      category: "Bakery",
    },
    {
      name: "Eggs, Dozen 🥚",
      quantity: 2,
      category: "Dairy",
    },
    {
      name: "Bananas 🍌",
      quantity: 6,
      category: "Produce",
    },
    {
      name: "Broccoli 🥦",
      quantity: 3,
      category: "Produce",
    },
    {
      name: "Chicken Breasts, 1 kg 🍗",
      quantity: 1,
      category: "Meat",
    },
    {
      name: "Pasta Sauce 🍝",
      quantity: 3,
      category: "Canned goods",
    },
    {
      name: "Spaghetti, 454 g 🍝",
      quantity: 2,
      category: "Dry goods",
    },
    {
      name: "Toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "Household",
    },
    {
      name: "Paper towels, 6 pack",
      quantity: 1,
      category: "Household",
    },
    {
      name: "Dish soap 🍽️",
      quantity: 1,
      category: "Household",
    },
    {
      name: "Hand soap 🧼",
      quantity: 4,
      category: "Household",
    },
  ];

  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
  );
};

export default ItemList;
