import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Button from "../Button";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { PiKeyReturn } from "react-icons/pi";
import { PiFlowerLotusLight } from "react-icons/pi";

const images = [
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581467935183f84a06a94fb_glam-nail-varnish-p-800.jpg",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65814664946c0d9e78593a1d_dark-night-eyewear-p-800.jpg",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65814650610ff1f0faea66f8_lather-fancy-bag-p-800.jpg",
  },
];

const ProductDetail = () => {
  return (
    <section className='py-44 lg:px-0 px-4'>
      <div className='max-w-6xl mx-auto '>
        <div className='grid md:grid-cols-2 gap-20'>
          <div className='flex flex-col gap-10'>
            {images?.map((item, index) => {
              return <img key={index} src={item?.image} alt='Thumbnail' />;
            })}
          </div>

          <div className='flex flex-col gap-6 md:sticky md:self-start top-10'>
            <p className='text-[#274b60] text-5xl'>Gold Pearl Brooch</p>
            <p className='text-[#274b60]'>
              It exudes sophistication and classic charm, adding a touch of
              refinement and grace to any outfit or occasion.
            </p>
            <span className='flex items-center justify-start gap-20'>
              <p className='text-[#274b60] text-2xl'>$ 46.39 USD</p>
              <p className='text-gray-400 text-2xl line-through'>
                $ 139.29 USD
              </p>
            </span>
            <span className='flex items-center justify-start gap-6'>
              <p className='text-[#274b60] text-lg font-semibold'>Quantity</p>
              <input
                type='number'
                className={`text-[#274b60] border border-[#274b60] rounded-sm bg-gray-50 p-2 active:border-blue-950 w-16`}
              />
            </span>
            <Button
              text='Add To Cart'
              customStyle='py-5 px-9 gap-1 uppercase text-sm text-white bg-[#274b60] me-auto'
              RightIcon={CiCirclePlus}
              iconStyle='text-white'
              size={18}
            />
          </div>
        </div>

        <div className='mt-20'>
          {/* Return policy */}
          <div className='bg-[#274b60] flex flex-wrap items-center justify-between py-6 px-20'>
            <span className='flex flex-col gap-4'>
              <LiaShippingFastSolid
                size={54}
                className='mx-auto text-[#e2bd99]'
              />
              <p className='text-white text-xl'>Free Shipping</p>
            </span>
            <span className='flex flex-col gap-4'>
              <MdOutlinePayment size={54} className='mx-auto text-[#e2bd99]' />
              <p className='text-white text-xl'>Secure Payments</p>
            </span>
            <span className='flex flex-col gap-4'>
              <PiKeyReturn size={54} className='mx-auto text-[#e2bd99]' />
              <p className='text-white text-xl'>Return Policy</p>
            </span>
            <span className='flex flex-col gap-4'>
              <PiFlowerLotusLight
                size={54}
                className='mx-auto text-[#e2bd99]'
              />
              <p className='text-white text-xl'>Quality Materials</p>
            </span>
          </div>

          {/* Description */}
          <div className='mt-20'>
            <p className='text-3xl text-[#274b60] pb-6'>Product Description</p>
            <div className='py-10 border-t border-b'>
              <p className='text-[#274b60]'>
                The Gold Pearl Brooch features a meticulously selected pearl,
                renowned for its flawless beauty and iridescence. Set in a
                meticulously designed gold framework, the brooch exudes a sense
                of opulence and refinement, making it an ideal statement piece
                for both formal occasions and everyday wear. Whether pinned
                delicately on a lapel, adorning a scarf, or enhancing the grace.
              </p>
              <ul className='ps-6 mt-2'>
                <li className='list-disc text-lg text-[#274b60]'>
                  Its versatility and classic.
                </li>
                <li className='list-disc text-lg text-[#274b60]'>
                  Addition to any jewelry collection.
                </li>
                <li className='list-disc text-lg text-[#274b60]'>
                  Tradition and modernity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
