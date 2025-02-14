import React from "react";

const FormInput = ({
  label,
  id,
  type,
  value,
  onChange,
  onInput,
  onBlur,
  error,
  showPasswordToggle = false,
  togglePasswordVisibility,
  wrapperStyle = "",
  inputStyle = "",
  labelStyle = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full h-full ${wrapperStyle}`}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${label}`}
        className={`${inputStyle} border-2 border-black p-4 text-xl w-full ${
          error ? "bg-red-200" : ""
        }`}
        value={value}
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
      />
      {showPasswordToggle && (
        <span className='cursor-pointer' onClick={togglePasswordVisibility}>
          {type === "password" ? "Show" : "Hide"}
        </span>
      )}
      <span className='text-red-500'>{error}</span>
    </div>
  );
};

export default FormInput;
