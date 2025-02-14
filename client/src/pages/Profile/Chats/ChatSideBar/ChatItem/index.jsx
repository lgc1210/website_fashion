import React from "react";

const ChatItem = ({ item }) => {
  return (
    <li>
      <div>
        <div>
          <img src={item?.image} alt='Avatar' />
        </div>
        <div>
          <p>{item?.name}</p>
          <p>{item?.message}</p>
        </div>
      </div>
      <div>
        <p>{item?.time}</p>
      </div>
    </li>
  );
};

export default ChatItem;
