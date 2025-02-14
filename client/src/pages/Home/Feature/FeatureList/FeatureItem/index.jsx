import React from "react";

const FeatureItem = ({ item }) => {
  return (
    <li className='h-auto'>
      <div className='flex flex-col items-start gap-4'>
        <div className='w-14 h-14'>
          <img
            src={item?.icon}
            alt={item?.title}
            className='w-full h-full object-contain object-center'
          />
        </div>
        <p className='text-xl text-[#274b60]'>{item?.title}</p>
        <p className='text-[#274b60]'>{item?.content}</p>
      </div>
    </li>
  );
};

export default FeatureItem;
