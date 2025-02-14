import React, { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import {
  isConfirmPassword,
  isEmail,
  isEmpty,
  isMinimumLength,
  isPhone,
} from "../../../utils";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "../../../contexts/Auth";

const Details = () => {
  const [fields, setFields] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setFields((prev) => ({
        ...prev,
        fullname: user?.fullname,
        email: user?.email,
        phone: user?.phone,
      }));
    }
  }, [user]);

  const handleFieldsChange = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleFieldsType = (key) => {
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleFieldsBlur = (key, message) => {
    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

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

        <form className='grid grid-cols-2 gap-5' onSubmit={handleSubmit}>
          <FormInput
            label='fullname'
            id='fullname'
            type='text'
            value={fields.fullname}
            onChange={(e) => handleFieldsChange("fullname", e.target.value)}
            onInput={() => handleFieldsType("fullname")}
            onBlur={() => {
              if (isEmpty(fields.fullname))
                handleFieldsBlur("fullname", "fullname is required");
            }}
            error={errors?.fullname}
            inputStyle='py-2.5 px-5 border-[1px] border-gray-500 outline-none rounded bg-gray-50'
          />
          <FormInput
            label='phone'
            id='phone'
            type='text'
            value={fields.phone}
            onChange={(e) => handleFieldsChange("phone", e.target.value)}
            onInput={() => handleFieldsType("phone")}
            onBlur={() => {
              if (isEmpty(fields.phone))
                handleFieldsBlur("phone", "phone is required");
              else if (!isPhone(fields.phone))
                handleFieldsBlur("phone", "phone is invalid");
            }}
            error={errors?.phone}
            inputStyle='py-2.5 px-5 border-[1px] border-gray-500 outline-none rounded bg-gray-50'
          />
          <FormInput
            label='email'
            id='email'
            type='email'
            value={fields.email}
            onChange={(e) => handleFieldsChange("email", e.target.value)}
            onInput={() => handleFieldsType("email")}
            onBlur={() => {
              if (isEmpty(fields.email))
                handleFieldsBlur("email", "email is required");
              else if (!isEmail(fields.email))
                handleFieldsBlur("email", "email is invalid");
            }}
            error={errors?.email}
            inputStyle='py-2.5 px-5 border-[1px] border-gray-500 outline-none rounded bg-gray-50'
          />

          <FormInput
            label='password'
            id='password'
            type='password'
            value={fields.password}
            onChange={(e) => handleFieldsChange("password", e.target.value)}
            onInput={() => handleFieldsType("password")}
            onBlur={() => {
              if (isEmpty(fields.password))
                handleFieldsBlur("password", "password is required");
              else if (!isMinimumLength(fields.password))
                handleFieldsBlur(
                  "password",
                  "password must be at least 6 characters"
                );
            }}
            error={errors?.password}
            inputStyle='py-2.5 px-5 border-[1px] border-gray-500 outline-none rounded bg-gray-50'
          />

          {!isEmpty(fields.password) && (
            <FormInput
              label='confirm-password'
              id='confirm-password'
              type='password'
              value={fields.confirmPassword}
              onChange={(e) =>
                handleFieldsChange("confirmPassword", e.target.value)
              }
              onInput={() => handleFieldsType("confirmPassword")}
              onBlur={() => {
                if (!isConfirmPassword(fields.password, fields.confirmPassword))
                  handleFieldsBlur(
                    "confirmPassword",
                    "confirm password is incorrect"
                  );
              }}
              error={errors?.confirmPassword}
              inputStyle='py-2.5 px-5 border-[1px] border-gray-500 outline-none rounded bg-gray-50'
            />
          )}

          <div className='w-full col-span-2'>
            <Button
              text='Update'
              customStyle='py-2 px-5 border border-[#274b60] bg-[#274b60] text-white rounded'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
