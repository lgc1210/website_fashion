import React from "react";
import BestCollectionList from "./BestCollectionList";

const BestCollection = () => {
  return (
    <div className='max-w-6xl mx-auto py-44'>
      <p className='text-5xl font-serif text-[#274b60] mb-10 text-center'>
        Best Collection
      </p>
      <BestCollectionList />
    </div>
  );
};

export default BestCollection;
