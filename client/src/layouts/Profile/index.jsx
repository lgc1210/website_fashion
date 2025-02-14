import React from "react";
import Sidebar from "../../pages/Profile/Sidebar";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <main>
      <section>
        {/* Cover */}
        <div className='w-full h-52'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/022/555/538/small_2x/3d-abstract-red-and-black-background-by-ai-generated-can-be-use-as-facebook-cover-free-photo.jpg'
            alt='Cover'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </section>

      <section className='w-full relative'>
        <div className='container lg:p-0 p-6 grid lg:grid-cols-12 gap-8 absolute -top-20 left-1/2 -translate-x-1/2'>
          <div className='lg:col-span-3'>
            <Sidebar />
          </div>
          <div className='lg:col-span-9'>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfileLayout;
