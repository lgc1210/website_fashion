import React, { lazy } from "react";
import Button from "../../components/Button";

const Shop = lazy(() => import("../../components/Shop"));
const Feedback = lazy(() => import("./Feedback"));
const Trendy = lazy(() => import("./Trendy"));
const JoinNow = lazy(() => import("./JoinNow"));
const Feature = lazy(() => import("./Feature"));
const Item = lazy(() => import("./Item"));
const BestCollection = lazy(() => import("./BestCollection"));
const Story = lazy(() => import("./Story"));
const Outstanding = lazy(() => import("./Outstanding"));

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
