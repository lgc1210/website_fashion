import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Banner from "../../assets/images/65793c5e2c7815e2cdcb711a_home-banner.png";
import Nav from "./Nav";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import contents from "./content";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerContent, setHeaderContent] = useState();

  useEffect(() => {
    const content = contents.find(
      (content) => content?.path === location.pathname
    );
    setHeaderContent(content || null);
  }, [location.pathname]);

  return (
    <>
      <section className={`${styles.bg_banner} overflow-hidden`}>
        <div className='container mx-auto relative z-50 lg:px-0 px-4 2xl:overflow-hidden'>
          <div className='max-w-6xl mx-auto w-full pt-20'>
            <Nav location={location} />

            <div className='pt-40 pb-64 relative z-10'>
              {/* Left */}
              <div className='flex flex-col gap-10'>
                <div className='py-4 px-10 rounded-full border border-gray-500 w-fit'>
                  <p
                    className={`${styles.yellow_text} ${styles.secondary_font} uppercase text-xl secondary_font`}>
                    {headerContent?.topText || "Go With The Trend"}
                  </p>
                </div>
                <div className='font-serif'>
                  <p className='text-white text-7xl'>
                    {headerContent?.middleText || "Unlock Your Fashion"}
                  </p>
                  <p className={`${styles.yellow_text} text-7xl`}>
                    {headerContent?.middleCustomText}
                  </p>
                </div>
                {headerContent?.buttonText && (
                  <div>
                    <Button
                      text={headerContent?.buttonText}
                      size={20}
                      customStyle='py-6 px-10 border border-solid border-[#e2bd99] hover:bg-[#e2bd99] text-white hover:text-[#274b60]'
                      iconStyle='text-[#e2bd99] group-hover:text-[#274b60]' // Remove the hover style from here
                      LeftIcon={FaArrowRightLong}
                      onClick={() => navigate("/shop")}
                    />
                  </div>
                )}
              </div>

              {/* Right */}
              <div></div>
            </div>
          </div>

          <div className='absolute top-0 lg:-right-[12%] -right-[50%] bottom-0 left-auto md:block hidden'>
            <img
              src={Banner}
              alt='Home Banner'
              className='w-full h-auto object-cover object-center'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
