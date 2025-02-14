import React from "react";
import Product from "../Product";

const sampleData = [
  {
    name: "Bubbly Bag",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65814578a11900005dbafbd8_bubbly-bag-p-800.jpg",
    price: "$ 71.67 USD",
    category: "Bags",
  },
  {
    name: "Men's Smart Dress",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581458a35183f84a069f56e_mens-smart-dress-p-800.jpg",
    price: "$ 20.30 USD",
    category: "Cloth",
  },
  {
    name: "Gold Pearl Brooch",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581459bc9e92cb3e49f49b8_gold-pearl-brooch-p-800.jpg",
    price: "$ 46.39 USD",
    category: "Beauty",
  },
  {
    name: "Cosmetic Product",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/658145df472161887f0e10a4_cosmetic-product-p-800.jpg",
    price: "$ 20.51 USD",
    category: "Footwears",
  },
  {
    name: "Men's Watches",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/658146117c74b957e7581cbb_mens-watch-p-800.jpg",
    price: "$ 42.56 USD",
    category: "Fashion",
  },
  {
    name: "Golden Ring",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/658145f081322879a8b586ca_golden-ring-p-800.jpg",
    price: "$ 52.86 USD",
    category: "Accessories",
  },
  {
    name: "Men's White Shoe",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581463ca1edb8c6b94624db_mens-white-shoe-p-800.jpg",
    price: "$ 1.57 USD",
    category: "Footwears",
  },
  {
    name: "Lather Fancy Bag",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65814650610ff1f0faea66f8_lather-fancy-bag-p-800.jpg",
    price: "$ 98.22 USD",
    category: "Bags",
  },
  {
    name: "Dark Night Eyewear",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65814664946c0d9e78593a1d_dark-night-eyewear-p-800.jpg",
    price: "$ 49.41 USD",
    category: "Accessories",
  },
  {
    name: "Glam Nail Varnish",
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/6581467935183f84a06a94fb_glam-nail-varnish-p-800.jpg",
    price: "$ 86.23 USD",
    category: "Beauty",
  },
];

const Products = () => {
  return (
    <div>
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
        {sampleData.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
