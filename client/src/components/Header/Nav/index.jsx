import React, { useState, Fragment } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/images/658ff46442ecf1f76a1fdfc0_retailflow-brand-new-logo.svg";
import CartIcon from "../../../assets/images/657ff232e9e3267618b343ba_cart-header-image.svg";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart";
import { useAuth } from "../../../contexts/Auth";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import paths from "../../../configs/paths";

const Nav = ({ location }) => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, openLoginModal, openRegisterModal, logout } =
    useAuth();
  const [showNav, setShowNav] = useState(false);

  // Filter menu items based on authentication status
  const pagesChildren = [
    { name: "FAQ", path: paths.faq },
    { name: "Team", path: paths?.team },
    { name: "Blog", path: paths.blog },
    { name: "Contact", path: paths.contact },
    ...(isAuthenticated()
      ? [{ name: "Profile", path: paths.profileDetails }, { name: "Logout" }] // Show Profile when logged in
      : [{ name: "Login" }, { name: "Register" }]), // Show Login & Register when NOT logged in
  ];

  const navItems = [
    { name: "Home", path: paths.home },
    { name: "About Us", path: paths.about },
    { name: "Shop", path: paths.shop },
    { name: "Collections", path: paths.collection },
    {
      name: "Pages",
      Icon: IoIosArrowDown,
      children: pagesChildren,
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setShowNav(false);
  };

  return (
    <Fragment>
      <Cart isShow={showCart} onClose={() => setShowCart(false)} />

      <nav
        className={`${styles.border_color} w-full border flex items-center relative z-40`}>
        <div
          className={`${styles.border_color} border-r md:px-10 px-2 py-1 w-fit h-full`}
          onClick={() => handleNavigate(paths.home)}>
          <img
            src={Logo}
            alt='Logo'
            className='object-contain object-center cursor-pointer w-full h-full'
          />
        </div>

        {/* Large screens */}
        <div className='md:px-10 px-5 flex-grow h-full'>
          <ul className='flex items-center lg:justify-between justify-end gap-8'>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  location.pathname === item?.path ? styles.text_active : ""
                } 
                  ${styles.text_hover_color} 
                  uppercase cursor-pointer text-white transition-all 
                  ${
                    item?.children
                      ? "flex items-center gap-2 group relative"
                      : ""
                  } 
                  lg:flex hidden`}>
                <p onClick={() => handleNavigate(item?.path)}>{item?.name}</p>
                {item?.Icon && <item.Icon size={20} />}
                {item?.children && (
                  <div
                    className={`${styles.bg_color} shadow absolute z-50 top-full left-0 w-40 p-4 hidden group-hover:block`}>
                    <ul>
                      {item?.children.map((childItem, index) => (
                        <li
                          key={index}
                          className={`uppercase hover:text-black cursor-pointer text-white transition-all p-2
                                      ${
                                        location.pathname === childItem?.path
                                          ? "text-black"
                                          : ""
                                      }`}>
                          <p
                            onClick={() => {
                              handleNavigate(childItem?.path);
                              if (childItem?.name === "Login") openLoginModal();
                              if (childItem?.name === "Register")
                                openRegisterModal();
                              if (childItem?.name === "Logout") logout();
                            }}>
                            {childItem?.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {/* Cart */}
            <li
              className={`text-black uppercase cursor-pointer transition-all flex items-center gap-2`}
              onClick={() => setShowCart(true)}>
              <img src={CartIcon} alt='Cart' />
              <small
                className={`${styles.bg_color} px-1.5 rounded-full font-semibold`}>
                200
              </small>
            </li>
            {/* Medium and small screens */}
            <li
              className={`border-l ${styles.border_color} lg:hidden flex flex-col justify-center items-center gap-1 ps-4 cursor-pointer`}
              onClick={() => setShowNav(true)}>
              <div className={`w-10 h-2 border ${styles.border_color}`}></div>
              <div className={`w-10 h-2 border ${styles.border_color}`}></div>
            </li>
          </ul>
        </div>

        {/* Medium and small screens */}
        <nav
          className={`fixed top-0 right-0 bottom-0 left-0 bg-[#274b60] z-20 transition-all duration-500 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}>
          <div>
            <div className='flex items-center justify-between py-6 border-b border-gray-400 px-6'>
              <p className='text-white text-3xl font-semibold font-serif'>
                Fashion
              </p>
              <IoCloseSharp
                size={30}
                className='text-white cursor-pointer p-1 rounded-full bg-gray-500'
                onClick={() => setShowNav(false)}
              />
            </div>
            <ul className='flex flex-col gap-6 py-6 px-6'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    location.pathname === item?.path ? styles.text_active : ""
                  } 
                  ${styles.text_hover_color} 
                  uppercase cursor-pointer text-white transition-all 
                  ${
                    item?.children
                      ? "flex items-center gap-2 group relative"
                      : ""
                  } `}>
                  <p onClick={() => handleNavigate(item?.path)}>{item?.name}</p>
                  {item?.Icon && <item.Icon size={20} />}
                  {item?.children && (
                    <div
                      className={`${styles.bg_color} shadow absolute z-50 top-full left-0 w-40 p-4 hidden group-hover:block`}>
                      <ul>
                        {item?.children.map((childItem, index) => (
                          <li
                            key={index}
                            className={`uppercase hover:text-black cursor-pointer text-white transition-all p-2
                                      ${
                                        location.pathname === childItem?.path
                                          ? "text-black"
                                          : ""
                                      }`}>
                            <p
                              onClick={() => {
                                navigate(childItem?.path);
                                if (childItem?.name === "Login")
                                  openLoginModal();
                                if (childItem?.name === "Register")
                                  openRegisterModal();
                                if (childItem?.name === "Logout") logout();
                              }}>
                              {childItem?.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              {/* Cart */}
              <li
                className={`text-black uppercase cursor-pointer transition-all flex items-center gap-2`}
                onClick={() => setShowCart(true)}>
                <img src={CartIcon} alt='Cart' />
                <small
                  className={`${styles.bg_color} px-1.5 rounded-full font-semibold`}>
                  200
                </small>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </Fragment>
  );
};

export default Nav;
