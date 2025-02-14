import React from "react";

const chatMessage = "chatMessage";

const ChatMessage = ({ chatMessage, fieldsChange, fieldsType, fieldsBlur }) => {
  return (
    <textarea
      id='message'
      rows='4'
      className='mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      placeholder='Write your message here...'
      onChange={(event) => fieldsChange(chatMessage, event.target.value)}
      onBlur={() => fieldsBlur(chatMessage, "Message is required")}
      onInput={() => fieldsType(chatMessage)}></textarea>
  );
};

export default ChatMessage;
