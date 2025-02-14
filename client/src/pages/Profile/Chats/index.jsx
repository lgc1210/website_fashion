import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ChatSideBar from "./ChatSideBar";
import Messages from "./Messages";

const Chats = () => {
  const navigate = useNavigate();

  return (
    <div className='border rounded bg-white'>
      <div className='px-10 py-6'>
        <div
          className='w-fit hover:underline cursor-pointer pb-8 flex items-center justify-start gap-2'
          onClick={() => navigate("/")}>
          <GoArrowLeft
            size={24}
            className='border border-black rounded-full p-1'
          />
          <p>Home</p>
        </div>

        <div className='grid grid-cols-3'>
          <div className='bg-red-300'>
            <ChatSideBar />
          </div>
          <div className='col-span-2 bg-blue-300'>
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
