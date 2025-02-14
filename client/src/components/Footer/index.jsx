import React from "react";
import styles from "./index.module.css";
import Button from "../Button";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/658ff46442ecf1f76a1fdfc0_retailflow-brand-new-logo.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer_bg}`}>
      <div className='max-w-6xl w-full mx-auto py-28 lg:px-0 px-4'>
        <div>
          <div className={`${styles.button_bg_img} p-8`}>
            <Button
              text='Follow Our Instagram'
              customStyle='py-6 px-10 mx-auto bg-white hover:bg-[#274b60] text-[#274b60] hover:text-white'
            />
          </div>

          <div className='flex flex-wrap gap-12 items-start justify-between pt-14'>
            <div className='flex flex-col gap-6 text-white'>
              <span className='w-52 h-auto'>
                <img src={Logo} alt='Logo' className='cursor-pointer' />
              </span>
              <p>PO Box 1622 Colins Street West Victoria 8077 Australia</p>
              <a
                className='hover:text-[#e2bd99] transition-all duration-500'
                href='tel:+012 345 6789'>
                +012 345 6789
              </a>
              <a
                className='hover:text-[#e2bd99] transition-all duration-500'
                href='mailto:info@retailflowfashion.com'>
                info@retailflowfashion.com
              </a>
              <ul className='flex items-center justify-center border border-[#e2bd99] w-fit'>
                <li className='border-r border-[#e2bd99] p-4 cursor-pointer group bg-transparent hover:bg-[#e2bd99] transition-all duration-500'>
                  <FaInstagram size={22} className='group-hover:text-black' />
                </li>
                <li className='border-r border-[#e2bd99] p-4 cursor-pointer group bg-transparent hover:bg-[#e2bd99] transition-all duration-500'>
                  <FaFacebook size={22} className='group-hover:text-black' />
                </li>
                <li className='border-r border-[#e2bd99] p-4 cursor-pointer group bg-transparent hover:bg-[#e2bd99] transition-all duration-500'>
                  <FaXTwitter size={22} className='group-hover:text-black' />
                </li>
                <li className='p-4 cursor-pointer group bg-transparent hover:bg-[#e2bd99] transition-all duration-500'>
                  <FaLinkedin size={22} className='group-hover:text-black' />
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='text-white text-2xl mb-6'>Pages</p>
              <ul className='flex flex-col gap-4'>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    Shop
                  </a>
                </li>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    Collection
                  </a>
                </li>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    FAQ
                  </a>
                </li>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    Blog
                  </a>
                </li>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    AboutUs
                  </a>
                </li>
                <li className='cursor-pointer'>
                  <a
                    href='/'
                    className='transition-all duration-500 text-white hover:text-[#e2bd99]'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className='text-white text-2xl mb-6'>Contact Us</p>
              <div className='flex flex-col gap-4'>
                <p className='text-white'>
                  For any additional questions feel free to contact us here
                </p>
                <input
                  type='email'
                  placeholder='enter email address'
                  className='p-6 border placeholder:text-white placeholder:text-lg hover:border-gray-200 active:border-gray-200 caret-current text-white border-[#e2bd99] outline-none w-full bg-transparent transition-all duration-500'
                />
                <Button
                  text='Send'
                  customStyle='py-4 px-10 w-fit border border-[#e2bd99] bg-[#e2bd99] text-[#274b60] hover:bg-transparent hover:text-white'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright here */}
      <div className='border-t border-slate-500 py-4 text-center lg:px-0 px-4'>
        <p className='text-white'>
          Copyright © RetailFlow | Designed by PTPMMNN - Powered by Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
