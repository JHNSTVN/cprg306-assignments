const Item = ({ name, quantity, category }) => {
    return (
        <div className="bg-gray-800 rounded my-2 p-1">
        <div className="font-bold">{name}</div>
        <div className="font-xs">Buy {quantity} in {category}</div>
      </div>
    );
  };

export default Item;
