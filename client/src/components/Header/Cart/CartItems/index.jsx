import React from "react";
import styles from "./index.module.css";

const CartItems = () => {
  const data = [
    {
      image:
        "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581459bc9e92cb3e49f49b8_gold-pearl-brooch.jpg",
      name: "Gold Pearl Brooch",
      price: "$ 46.39 USD",
    },
    {
      image:
        "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581459bc9e92cb3e49f49b8_gold-pearl-brooch.jpg",
      name: "Gold Pearl Brooch",
      price: "$ 46.39 USD",
    },
    {
      image:
        "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581458a35183f84a069f56e_mens-smart-dress.jpg",
      name: "Men's Smart Dress",
      price: "$ 20.30 USD",
    },
    {
      image:
        "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/658145f081322879a8b586ca_golden-ring.jpg",
      name: "Golden Ring",
      price: "$ 52.86 USD",
    },
  ];

  return (
    <ul className='flex flex-col gap-6'>
      {data?.map((item, index) => {
        return (
          <li key={index} className='flex items-start justify-between'>
            <div className='flex items-center justify-start gap-6 flex-grow'>
              <div className='size-1/6 '>
                <img
                  src={item.image}
                  alt='Thumbnail'
                  className='w-full h-auto object-contain object-center'
                />
              </div>
              <div className='text-start h-full'>
                <p className={`${styles.text_color} text-lg`}>{item?.name}</p>
                <p className={`${styles.text_color} text-lg`}>{item?.price}</p>
                <button className={`${styles.text_color} text-lg`}>
                  Remove
                </button>
              </div>
            </div>
            <div>
              <input
                type='number'
                className={`${styles.text_color} border border-gray-200 rounded-sm bg-gray-50 p-2 active:border-blue-950 w-16`}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
