import React, { useEffect, useState } from "react";
import ChatInformation from "./ChatInformation";
import ChatHeader from "./ChatHeader";
import { isEmail, isEmpty, isPhone } from "../../utils";
import { IoMdSend } from "react-icons/io";
import Button from "../Button";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [toggleChat, setToggleChat] = useState(false);
  const [toggleInformation, setToggleInformation] = useState(false);
  const [fields, setFields] = useState({
    fullname: "",
    email: "",
    phone: "",
    chatMessage: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!toggleChat) {
      setToggleInformation(false);
    }
  }, [toggleChat]);

  const validateFields = () => {
    const errs = {};

    if (isEmpty(fields.fullname)) errs.fullname = "Fullname is required";
    if (isEmpty(fields.email)) errs.email = "Email is required";
    else if (!isEmail(fields.email)) errs.email = "Email is invalid";
    if (isEmpty(fields.phone)) errs.phone = "Phone is required";
    else if (!isPhone(fields.phone)) errs.phone = "Phone is invalid";
    if (isEmpty(fields.chatMessage)) errs.chatMessage = "Message is required";

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleFieldsChange = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleFieldsType = (key) => {
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleFieldsBlur = (key, message) => {
    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  return (
    <section
      className={`fixed z-50 right-0 bottom-0 rounded-t-lg bg-[#e2bd99] text-white font-sans font-semibold transition-all duration-500 ${
        toggleChat ? "translate-y-0" : "translate-y-[calc(100%-36px)]"
      }`}>
      <div>
        {/* Chat header */}
        <ChatHeader toggleChat={toggleChat} setToggleChat={setToggleChat} />

        {/* Chat body */}
        <div className='bg-white h-auto p-4 transition-all duration-500'>
          {/* Chat information */}
          <ChatInformation
            toggleInformation={toggleInformation}
            setToggleInformation={setToggleInformation}
            setFields={setFields}
            fields={fields}
            fieldsChange={handleFieldsChange}
            fieldsType={handleFieldsType}
            fieldsBlur={handleFieldsBlur}
          />

          {/* Chat message */}
          <ChatMessage
            chatMessage={fields?.chatMessage}
            fieldsChange={handleFieldsChange}
            fieldsType={handleFieldsType}
            fieldsBlur={handleFieldsBlur}
          />

          {/* Send button */}
          <div>
            <Button
              text='Start chatting'
              LeftIcon={IoMdSend}
              customStyle='rounded-full py-1.5 px-2 bg-[#e2bd99] text-xs shadow mx-auto'
              size={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
