const Item = ({ name, quantity, category }) => {
    return (
      <div className="bg-gray-900 rounded my-3 p-1 w-1/2 ml-0.5 ">
        <div className="font-bold">{name}</div>
        <div className="text-xs">Buy {quantity} in {category}</div>
      </div>
    );
  };

export default Item;