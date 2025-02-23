import React from "react";
import vid from "../../assets/videos/654dafca65324216537abf23_manquin-video-transcode.mp4";
import Button from "../Button";
import { BiRightArrow } from "react-icons/bi";

const Story = () => {
  return (
    <div className='py-44'>
      <div className='w-full h-full relative'>
        <video className='w-full h-full' autoPlay loop muted playsInline>
          <source src={vid} type='video/mp4' />
        </video>
        <Button
          text='Story'
          RightIcon={BiRightArrow}
          customStyle='justify-center gap-1 lg:w-72 lg:h-72 md:w-42 md:h-42 w-32 h-32 text-sm bg-white/60 backdrop-blur-sm rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  );
};

export default Story;
