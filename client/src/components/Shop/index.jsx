import React from "react";
import styles from "./index.module.css";
import Products from "../Products";

const Shop = () => {
  return (
    <section className=' lg:px-0 px-4 py-44'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col gap-6 items-center'>
          <span
            className={`${styles.border_color} py-4 px-10 rounded-full border w-fit mx-auto`}>
            <p
              className={`${styles.primary_text} ${styles.secondary_font} uppercase text-lg secondary_font`}>
              Sunshine series
            </p>
          </span>

          <p
            className={`${styles.primary_text} capitalize text-5xl font-serif`}>
            Frequent Retail Sessions
          </p>

          <p className={`${styles.primary_text} md:text-center text-justify`}>
            It's a journey marked by repeated visits, a tapestry woven with
            diverse encounters, discoveries, <br /> and the pleasure derived
            from navigating the ever-evolving retail realms.
          </p>
          <div></div>
        </div>

        <Products />
      </div>
    </section>
  );
};

export default Shop;
