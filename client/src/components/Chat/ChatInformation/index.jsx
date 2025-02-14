import React, { useEffect } from "react";
import { FaRotateLeft } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../../contexts/Auth";

const ChatInformation = ({
  toggleInformation,
  setToggleInformation,
  setFields,
  fields,
  fieldsChange,
  fieldsType,
  fieldsBlur,
}) => {
  const { isAuthenticated, user } = useAuth();

  console.log("user information:", user);

  useEffect(() => {
    if (isAuthenticated() && user) {
      setFields((prev) => ({
        ...prev,
        fullname: user?.fullname,
        email: user?.email,
        phone: user?.phone,
      }));
    } else {
      setFields({ fullname: "", email: "", phone: "", chatMessage: "" });
    }
  }, [user]);

  return (
    <div className='mb-2'>
      {isAuthenticated() && !toggleInformation ? (
        <div className='bg-slate-100 p-4 rounded-lg flex items-center justify-start gap-1'>
          <div className='overflow-hidden rounded-lg size-9 me-2 self-start'>
            <img
              src='https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg'
              alt='Avatar'
              className='object-cover object-center'
            />
          </div>
          <div className='max-w-32'>
            <p className='text-black font-sans font-semibold uppercase truncate'>
              {user?.fullname}
            </p>
            <p className='text-black font-sans truncate text-sm font-normal'>
              {user?.email}
            </p>
            <p className='text-black font-sans truncate text-sm font-normal'>
              {user?.phone}
            </p>
          </div>
          <div>
            <MdEdit
              size={34}
              title='Edit information'
              className='text-gray-500 cursor-pointer rounded-full p-1.5 hover:bg-gray-200'
              onClick={() => setToggleInformation(true)}
            />
          </div>
          <div>
            <FaRotateLeft
              size={32}
              title='Delete data'
              className='text-gray-500 cursor-pointer rounded-full p-1.5 hover:bg-gray-200'
            />
          </div>
        </div>
      ) : (
        <form>
          {/* Fullname */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='floating_fullname'
              id='floating_fullname'
              className='block py-2.5 px-0 ps-3 w-full text-sm text-gray-900 bg-transparent border rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
              value={fields?.fullname}
              onChange={(event) => {
                fieldsChange("fullname", event.target.value);
              }}
              onBlur={() => {
                fieldsBlur("fullname", "Fullname is required");
              }}
              onInput={() => {
                fieldsType("fullname");
              }}
            />
            <label
              htmlFor='floating_fullname'
              className='bg-white z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Enter you fullname *
            </label>
          </div>

          {/* Email */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='floating_email'
              id='floating_email'
              className='block py-2.5 px-0 ps-3 w-full text-sm text-gray-900 bg-transparent border rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
              value={fields?.email}
              onChange={(event) => {
                fieldsChange("email", event.target.value);
              }}
              onBlur={() => {
                fieldsBlur("email", "Email is required");
              }}
              onInput={() => {
                fieldsType("email");
              }}
            />
            <label
              htmlFor='floating_email'
              className='bg-white z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Enter you email *
            </label>
          </div>

          {/* Phone */}
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='floating_phone'
              id='floating_phone'
              className='block py-2.5 px-0 ps-3 w-full text-sm text-gray-900 bg-transparent border rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
              value={fields?.phone}
              onChange={(event) => {
                fieldsChange("phone", event.target.value);
              }}
              onBlur={() => {
                fieldsBlur("phone", "Phone is required");
              }}
              onInput={() => {
                fieldsType("phone");
              }}
            />
            <label
              htmlFor='floating_phone'
              className='bg-white z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Enter you phone *
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChatInformation;
