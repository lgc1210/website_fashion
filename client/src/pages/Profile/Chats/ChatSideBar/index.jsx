import React from "react";
import ChatItem from "./ChatItem";
import { FaBars } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const chatItems = [
  {
    avatar:
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    name: "John Doe",
    message: "Hey, how's it going?",
    time: "10:30 AM",
  },
  {
    avatar:
      "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    name: "Emma Smith",
    message: "I'm good! What about you?",
    time: "10:32 AM",
  },
  {
    avatar:
      "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
    name: "Sophia Lee",
    message: "Did you finish the project?",
    time: "10:35 AM",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOgVxLPZQlTUfG5XDL-uaQqJ03S3XEMx4xg&s",
    name: "Michael Brown",
    message: "Not yet, still working on it.",
    time: "10:40 AM",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png",
    name: "Olivia Davis",
    message: "Let me know if you need help!",
    time: "10:45 AM",
  },
];

const ChatSideBar = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
          <FaBars size={24} />
          <p>Gia Cuong</p>
        </div>
        <div>
          <FaPlus size={24} />
        </div>
      </div>

      <div>
        <p>Chat Items</p>
        <ul>
          {chatItems.map((chatItem) => (
            <ChatItem key={chatItem.time} item={chatItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatSideBar;
