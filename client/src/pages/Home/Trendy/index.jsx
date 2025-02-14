import React from "react";
import Background from "../../../assets/images/658ff46442ecf1f76a1fdfc0_retailflow-brand-new-logo.svg";
import LookBook1 from "../../../assets/images/654dc55d6b3b83d9106b8fa2_Look-book-01.jpg";
import LookBook2 from "../../../assets/images/654dcaa8ea37faf359496f5c_Look-book-04.jpg";
import LookBook3 from "../../../assets/images/654dcaa7bec795e9851ed744_Look-book-05.jpg";
import LookBook4 from "../../../assets/images/654dcaa7f5bb0633400e221d_Look-book-06.jpg";
import Button from "../../../components/Button";

const Trendy = () => {
  return (
    <div
      className='lg:py-44 py-28 bg-no-repeat bg-cover w-full h-full relative'
      style={{ backgroundImage: `url(${Background})` }}>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-20'>
        <div className='flex flex-col gap-8'>
          <p className='text-5xl text-[#274b60]'>Graceful & Trendy Style</p>
          <p className='text-[#274b60]'>
            Join the exploration of a fashion narrative that transcends the
            ordinary, inviting you to embrace a style that is both elegant and
            on the pulse of the latest trends.
          </p>
          <Button
            text='Start Shopping'
            customStyle='bg-white py-5 px-10 border border-[#274b60] hover:text-white hover:bg-[#274b60] w-fit text-[#274b60]'
          />
        </div>
        <div className='col-span-2 grid sm:grid-cols-2 gap-12'>
          <div className='flex flex-col gap-12'>
            <div className='relative'>
              <img
                src={LookBook1}
                alt='Look Book 1'
                className='sm:w-fit w-full'
              />
              <Button
                text='Next'
                customStyle='py-2 px-6 absolute top-1/4 right-0 text-white bg-[#274b60] hover:text-[#274b60] hover:bg-[#e2bd99]'
              />
            </div>
            <div className='relative'>
              <img
                src={LookBook3}
                alt='Look Book 1'
                className='sm:w-fit w-full'
              />
              <p className='absolute top-0 left-0 p-6 text-[#274b60]'>$50.00</p>
              <Button
                text='Sale Up To 50% Offer'
                customStyle='py-2 px-6 text-white bg-[#274b60] hover:text-[#274b60] hover:bg-[#e2bd99] md:w-fit w-full md:justify-start justify-center'
              />
            </div>
          </div>
          <div className='flex flex-col gap-12'>
            <div className='relative'>
              <img
                src={LookBook2}
                alt='Look Book 1'
                className='sm:w-fit w-full'
              />
              <p className='absolute top-0 right-0 p-6 text-[#274b60]'>
                $50.00
              </p>
            </div>

            <div>
              <img
                src={LookBook4}
                alt='Look Book 1'
                className='sm:w-fit w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
