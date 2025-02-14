import React from "react";
import Collection from "../Collection";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import SubBackground1 from "../../assets/images/6552fded7796cdb6ba61cddd_CTA-bg-01.png";
import SubBackground2 from "../../assets/images/6552fded16ddb28a3fc71f61_CTA-bg-02.png";

const sampleData = [
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800bef09ade2403960a033_Category-04.jpg",
    title: "Stylish Products",
    category: "Fashion",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800bd5e5a93c9451927d07_Category-03.jpg",
    title: "Modern Cloths",
    category: "Cloth",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800bc2dd25c3dcb0c8ec91_Category-11.jpg",
    title: "Unique Wearings",
    category: "Accessories",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800b9ae2892f2d3f314672_Category-07.jpg",
    title: "Grooming Products",
    category: "Beauty",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800b6f76d8f053ed9b29a3_Category-02.jpg",
    title: "Quality Bags",
    category: "Bags",
  },
  {
    image:
      "https://cdn.prod.website-files.com/655703d767a105c6152b0bec/65800b606f74b290df4a8cc7_Category-01.jpg",
    title: "Modern Footwears",
    category: "Footwears",
  },
];

const Collections = () => {
  return (
    <section className='py-44 lg:px-0 px-4'>
      <div className='max-w-6xl mx-auto'>
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {sampleData.map((item, index) => (
            <Collection key={index} item={item} />
          ))}
        </ul>

        <div
          className='mt-44 bg-[#274b60] lg:p-20 py-10 px-10 grid lg:grid-cols-2'
          style={{
            backgroundImage: `url(${SubBackground1}), url(${SubBackground2})`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "left top, right bottom",
            backgroundSize: "contain, contain",
          }}>
          <div className=''>
            <p className='font-serif capitalize lg:text-5xl text-2xl text-white lg:text-start text-center mb-4'>
              Subscribe Our{" "}
              <span className='lg:inline-block hidden'>
                <br />
              </span>{" "}
              Newsletter
            </p>
          </div>
          <div className='border border-[#e2bd99] flex items-center justify-end w-full h-20'>
            <FormInput
              type='email'
              id='email'
              label='email'
              wrapperStyle='gap-0'
              labelStyle='hidden'
              inputStyle='border-none outline-none text-white h-full bg-transparent placeholder:text-white'
            />
            <Button
              text='Subscribe'
              customStyle='bg-[#e2bd99] hover:bg-white text-[#274b60] cursor-pointer h-full px-5'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
