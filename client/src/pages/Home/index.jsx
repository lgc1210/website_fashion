import React, { lazy } from "react";
import Button from "../../components/Button";

const Shop = lazy(() => import("../../components/Shop"));
const Feedback = lazy(() => import("../../components/Feedback"));
const Trendy = lazy(() => import("../../components/Trendy"));
const JoinNow = lazy(() => import("../../components/JoinNow"));
const Feature = lazy(() => import("../../components/Feature"));
const Item = lazy(() => import("../../components/Item"));
const BestCollection = lazy(() => import("../../components/BestCollection"));
const Story = lazy(() => import("../../components/Story"));
const Outstanding = lazy(() => import("../../components/Outstanding"));

const Home = () => {
  return (
    <section className='lg:px-0 p-8'>
      <Outstanding />
      <div>
        <Shop />
        <Button
          text='Shop Now'
          customStyle='bg-[#274b60] text-white hover:bg-[#e2bd99] hover:text-[#274b60] py-5 px-8 mx-auto mt-32'
        />
      </div>
      <Story />
      <Feedback />
      <Trendy />
      <JoinNow />
      <Feature />
      <Item />
      <BestCollection />
    </section>
  );
};

export default Home;
