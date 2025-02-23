import React from "react";
import Hero1 from "../../assets/images/654a0a5b7b2ad94b9705bc4c_Home-category-01.jpg";
import Hero2 from "../../assets/images/654a0a5bd20b2802a817ce4f_Home-category-02.jpg";
import Hero3 from "../../assets/images/654a0a5ca1b2fa5315829448_Home-category-03.jpg";
import Sale from "../../assets/images/654a142508f8ca887f56da8a_Home-category-sale.png";
import Button from "../Button";

const Outstanding = () => {
  return (
    <div className='container mx-auto w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
      <div className='relative h-72 overflow-hidden group cursor-pointer'>
        <img
          src={Hero1}
          alt='Category 1'
          className='w-full h-full object-cover object-center group-hover:blur-sm group-hover:scale-[1.05] transition-all duration-500'
        />
        <Button
          text='See All Collection'
          customStyle='bg-white text-[#274b60] p-2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit'
        />
      </div>
      <div className='relative max-h-72 w-full overflow-hidden group cursor-pointer'>
        <img
          src={Hero2}
          alt='Category 2'
          className='w-full h-full object-cover object-center group-hover:blur-sm group-hover:scale-[1.05] transition-all duration-500'
        />
        <div className='absolute top-0 left-0 w-fit ps-10 pe-10 pb-10 pt-5'>
          <div
            style={{
              backgroundImage: `url(${Sale})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className='text-center content-center text-sm -rotate-12 size-14 mb-4'>
            Sale
          </div>
          <p className='text-[#274b60] text-5xl mb-2'>
            Fashion <br />
            50%
          </p>
          <Button
            text='Super Savings Day'
            customStyle='bg-[#274b60] text-white py-2 px-2.5'
          />
        </div>
      </div>
      <div className='relative max-h-72 w-full overflow-hidden group cursor-pointer'>
        <img
          src={Hero3}
          alt='Category 3'
          className='w-full h-full object-cover object-center group-hover:blur-sm group-hover:scale-[1.05] transition-all duration-500'
        />
        <Button
          text='Makeup Accessories'
          customStyle='bg-white text-[#274b60] p-2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit'
        />
      </div>
    </div>
  );
};

export default Outstanding;
