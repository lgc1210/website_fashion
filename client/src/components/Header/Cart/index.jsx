import React from "react";
import Overlay from "../../Overlay";
import { IoClose } from "react-icons/io5";
import CartItems from "./CartItems";
import Button from "../../Button";
import styles from "./index.module.css";

const Cart = ({ isShow, onClose }) => {
  return (
    <>
      <Overlay isShow={isShow} onClose={onClose} />

      <section>
        <div
          className={`${
            isShow ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 fixed z-50 top-0 bottom-0 right-0 max-w-lg w-full bg-white flex flex-col`}>
          <header className='flex items-center justify-between p-6 border-b'>
            <p className={`${styles.text_color} capitalize text-3xl`}>
              Your Cart
            </p>
            <IoClose
              size={40}
              className={`${styles.text_color} p-1.5 cursor-pointer`}
              onClick={onClose}
            />
          </header>
          {/* If products exist */}
          <>
            <main className='p-6 flex-grow'>
              <CartItems />
            </main>
            <footer className='p-6 border-t '>
              <div className='flex items-center justify-between pb-6'>
                <p className={`${styles.text_color} text-lg`}>Subtotal</p>
                <p className={`${styles.text_color} text-xl font-semibold`}>
                  $ 507.51 USD
                </p>
              </div>
              <Button
                text='Continue To Checkout'
                customStyle='py-5 px-10 w-full justify-center bg-[#274b60] hover:bg-[#e2bd99] text-white hover:text-[#274b60]'
              />
            </footer>
          </>

          {/* If products do not exits */}
          {/* <>
            <main className='h-full w-full   flex flex-col items-center justify-center'>
              <div className='p-6'>
                <p className={`${styles.text_color} text-lg`}>
                  No items found.
                </p>
              </div>
              <Button
                text='SHOP NOW'
                customStyle='justify-center hover:bg-[#e2bd99] hover:text-[#274b60]'
              />
            </main>
          </> */}
        </div>
      </section>
    </>
  );
};

export default Cart;
