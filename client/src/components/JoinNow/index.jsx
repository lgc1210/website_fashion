import React from "react";
import styles from "./index.module.css";
import Button from "../Button";
import FormInput from "../FormInput";
import BackgroundImage from "../../assets/images/65794644f0e04ebc87ba658d_CTA-image.png";
import Video from "../../assets/videos/654ddbab16c68ced7a749127_CTA-video-transcode.mp4";

const JoinNow = () => {
  return (
    <div className='max-w-[1920px] w-full mx-auto'>
      <div className='lg:flex flex-wrap'>
        <div className='lg:w-1/2 flex items-center justify-between bg-[#e6eaeb] py-44 p-20 ps-0 relative overflow-hidden'>
          <div className='lg:absolute bottom-0 -left-20'>
            <img
              src={BackgroundImage}
              alt=''
              className='w-full h-full object-contain object-center'
            />
          </div>
          <div className='flex flex-col items-start gap-4 ms-auto lg:max-w-80'>
            <div
              className={`${styles.border_color} py-4 px-10 rounded-full border w-fit text-center`}>
              <p
                className={`${styles.primary_text} ${styles.secondary_font} uppercase text-lg secondary_font`}>
                Women Collection
              </p>
            </div>
            <p className='text-4xl text-[#274b60] font-serif leading-relaxed'>
              Enjoy Savings of Up to 50% on Best selling Items!
            </p>
            <Button
              text='Shop Now'
              customStyle='bg-transparent py-5 px-10 border border-[#274b60] hover:text-white hover:bg-[#274b60] w-fit text-[#274b60]'
            />
          </div>
        </div>
        <div className='lg:w-1/2 bg-[#bccccd] p-20 flex flex-col items-center justify-center gap-10'>
          <div className='w-fit overflow-hidden relative rounded-xl'>
            <video className='absolute inset-0' autoPlay loop muted>
              <source src={Video} type='video/mp4'></source>
            </video>
            <div className='text-center mix-blend-screen w-full h-full'>
              <h1 className='lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-serif font-extrabold bg-white md:text-nowrap py-2 px-4'>
                Join Now
              </h1>
            </div>
          </div>
          <div className='border-b border-[#274b60] flex items-center justify-end w-full h-18'>
            <FormInput
              type='email'
              id='email'
              label='email'
              wrapperStyle='gap-0'
              labelStyle='hidden'
              inputStyle='border-none outline-none text-[#274b60] h-full bg-transparent placeholder:text-[#274b60]'
            />
            <Button
              text='Send'
              customStyle='bg-[#274b60] text-white h-full px-14 tracking-widest'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
