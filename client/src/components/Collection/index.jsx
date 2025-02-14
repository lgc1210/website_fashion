import React from "react";

const Collection = ({ item }) => {
  return (
    <li className='flex flex-col gap-4 items-center'>
      <div className='group overflow-hidden'>
        <img
          src={item?.image}
          alt='Collection'
          className='cursor-pointer w-full h-full object-cover object-center group-hover:scale-[1.1] transition-all duration-500'
        />
      </div>
      <div>
        <p className='capitalize text-3xl hover:text-[#e2bd99] text-[#274b60] transition-all duration-500 text-center cursor-pointer mb-2'>
          {item?.title}
        </p>
        <p className='uppercase hover:text-[#e2bd99] text-[#274b60] transition-all duration-500 text-center cursor-pointer '>
          {item?.category}
        </p>
      </div>
    </li>
  );
};

export default Collection;
