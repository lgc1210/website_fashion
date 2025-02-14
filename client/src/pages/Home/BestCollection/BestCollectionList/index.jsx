import React from "react";
import items from "./items";
import BestCollectionItem from "./BestCollectionItem";

const BestCollectionList = () => {
  return (
    <ul className='flex items-center justify-center gap-10 flex-wrap'>
      {items?.map((item, index) => (
        <BestCollectionItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default BestCollectionList;
