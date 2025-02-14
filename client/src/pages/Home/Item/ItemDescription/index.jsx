import React from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "../../../../components/Button";

const ItemDescription = ({ positionStyle = "", description }) => {
  return (
    <div
      className={`absolute z-20 backdrop-blur-sm rounded-full p-8 group ${positionStyle}`}
      style={{ backgroundColor: "rgba(84, 84, 84, .15)" }}>
      <div className='bg-white p-5 rounded-full'>
        <FaPlus
          size={20}
          className='group-hover:rotate-45 transition-all duration-500'
        />
      </div>

      {/* Dynamic Description */}
      <div className='shadow-lg bg-white p-8 absolute top-full -left-3/4 max-w-xl w-80 flex flex-col items-center gap-4 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none opacity-0 transition-all duration-500 z-30'>
        <p className='text-[#274b60] text-xl font-semibold font-sans'>
          {description?.title}
        </p>
        <p className='text-center text-[#274b60]'>{description?.content}</p>
        <Button
          text='View More'
          customStyle='text-sm border-b border-[#274b60] text-[#e2bd99] hover:text-[#274b60] hover:border-[#e2bd99]'
        />
      </div>
    </div>
  );
};

export default ItemDescription;
