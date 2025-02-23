import React from "react";
import ItemImage from "../../assets/images/654e200787af46540ed1ae75_model-01.png";
import ItemDescription from "./ItemDescription";
import itemDescriptionList from "./itemDescriptionList";

const Item = () => {
  return (
    <div className='pb-32 border-b'>
      <div className='relative max-w-6xl mx-auto'>
        <p className='absolute -z-10 lg:text-9xl md:text-8xl text-5xl text-[#274b60] font-serif leading-snug'>
          Excellence <br /> Starts from <br /> Within
        </p>
        <div className='relative flex items-center justify-center'>
          <img src={ItemImage} alt='Model' className='' />

          {/* Item Description Here */}
          <ItemDescription
            positionStyle='top-72 left-1/3'
            description={itemDescriptionList[0]}
          />
          <ItemDescription
            positionStyle='top-1/5 left-1/4'
            description={itemDescriptionList[1]}
          />
          <ItemDescription
            positionStyle='top-1/3 right-1/4'
            description={itemDescriptionList[2]}
          />
          <ItemDescription
            positionStyle='bottom-48 left-2/5'
            description={itemDescriptionList[3]}
          />
          <ItemDescription
            positionStyle='bottom-0 right-1/3'
            description={itemDescriptionList[4]}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
