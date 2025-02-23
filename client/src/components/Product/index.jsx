import React from "react";
import Button from "../Button";
import { CiCirclePlus } from "react-icons/ci";
import paths from "../../configs/paths";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <li
      className='group flex flex-col gap-2 cursor-pointer'
      onClick={() =>
        navigate(paths.productDetails, { state: { productId: product?.id } })
      }>
      <div className='relative overflow-hidden'>
        <img
          src={product?.image}
          alt={product?.name}
          className='group-hover:scale-[1.2] transition-all duration-500'
        />

        <div className='absolute bottom-0 left-0 right-0 cursor-pointer translate-y-full group-hover:translate-y-0 transition-all duration-500'>
          <Button
            text='Add To Cart'
            customStyle='py-3 px-7 gap-1 uppercase text-sm text-white bg-[#274b60] mx-auto'
            RightIcon={CiCirclePlus}
            iconStyle='text-white'
            size={18}
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-[#274b60]'>{product?.name}</p>
        <p className='text-[#274b60]'>{product?.price}</p>
      </div>
      <p className='uppercase text-[#274b60] tracking-widest text-xs'>
        {product?.category}
      </p>
    </li>
  );
};

export default Product;
