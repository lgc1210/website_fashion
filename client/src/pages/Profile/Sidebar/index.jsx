import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosCamera } from "react-icons/io";
import { useAuth } from "../../../contexts/Auth";

const PROFILE_DETAILS = "/profile/details";
const PROFILE_ORDERS = "/profile/orders";
const ADDRESS_BOOK = "/profile/address-book";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [itemSelected, setItemSelected] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (!itemSelected) {
      setItemSelected(location.pathname);
    }
  }, [itemSelected, location]);

  const selecteItem = (path) => {
    setItemSelected(path);
    navigate(path);
  };

  return (
    <div className='border rounded bg-white'>
      <div className='px-10 py-6'>
        <div className='h-40 w-40 rounded-full border mx-auto relative overflow-hidden group'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/022/555/538/small_2x/3d-abstract-red-and-black-background-by-ai-generated-can-be-use-as-facebook-cover-free-photo.jpg'
            alt='Avatar'
            className='w-full h-full object-cover object-center mx-auto'
          />
          <IoIosCamera
            size={50}
            className='group-hover:block hidden opacity-60 p-2 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-purple-800 text-white z-10'
          />
        </div>
        <div className='text-center mt-4'>
          <p className='text-lg font-semibold'>{user?.fullname}</p>
          <p className='text-sm text-gray-600'>{user?.email}</p>
        </div>
      </div>
      <ul>
        <li
          className={`capitalize cursor-pointer border-t px-10 py-4 hover:bg-gray-100 ${
            itemSelected === PROFILE_DETAILS ? "bg-gray-200" : ""
          }`}
          onClick={() => selecteItem(PROFILE_DETAILS)}>
          Details
        </li>
        <li
          className={`capitalize cursor-pointer border-t px-10 py-4 hover:bg-gray-100 ${
            itemSelected === PROFILE_ORDERS ? "bg-gray-200" : ""
          }`}
          onClick={() => selecteItem(PROFILE_ORDERS)}>
          Orders
        </li>
        <li
          className={`capitalize cursor-pointer border-t px-10 py-4 hover:bg-gray-100 ${
            itemSelected === ADDRESS_BOOK ? "bg-gray-200" : ""
          }`}
          onClick={() => selecteItem(ADDRESS_BOOK)}>
          Address book
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
