import React from 'react';
import NewItem from './new-item';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center p-5 my-4">Shopping List</h1>
      <div className="w-64">
        <NewItem />
      </div>
    </div>
  );
};

export default Page;

