import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button";

const BestCollectionItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className='bg-[#eee] max-w-80 overflow-hidden relative group'>
        <img src={item?.image} alt={item?.title} />

        <div className='absolute bottom-0 left-0 right-0 bg-white h-1/2 p-8 translate-y-full group-hover:translate-y-0 transition-all duration-500'>
          <p className='text-center text-xl text-[#274b60] mb-4'>
            {item?.title}
          </p>
          <Button
            text='View'
            customStyle='py-2 px-4 text-sm mx-auto bg-white border border-[#e2bd99] text-[#274b60] hover:text-white hover:bg-[#274b60] hover:border-[#274b60]'
            onClick={() => navigate("/collection")}
          />
        </div>
      </div>
    </li>
  );
};

export default BestCollectionItem;
