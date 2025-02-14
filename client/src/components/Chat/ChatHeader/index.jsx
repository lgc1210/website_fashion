import React, { memo } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const ChatHeader = ({ toggleChat, setToggleChat }) => {
  return (
    <div className='px-4'>
      <div
        className={`flex items-center gap-2 py-2 cursor-pointer max-w-md w-auto relative ${
          toggleChat ? "justify-between" : "justify-start"
        }`}
        onClick={() => setToggleChat(true)}>
        <IoMdChatbubbles
          className={`transition-all duration-500 ${
            !toggleChat
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none absolute"
          }`}
        />
        <p
          className={`transition-all duration-500 ${
            toggleChat ? "text-lg" : "text-sm"
          }`}>
          Chat with a consultant
        </p>
        <IoClose
          size={26}
          onClick={(event) => {
            event.stopPropagation();
            setToggleChat(false);
          }}
          className={`cursor-pointer p-0.5 rounded-full hover:bg-gray-400 transition-all duration-500 ${
            toggleChat
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />
      </div>
      <div className='py-1 inline-block'>
        <p className='font-normal'>I am here to support you</p>
      </div>
    </div>
  );
};

export default memo(ChatHeader);
