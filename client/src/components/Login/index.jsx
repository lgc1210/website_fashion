import React, { useEffect, useState } from "react";
import Overlay from "../Overlay";
import Button from "../Button";
import { isEmail, isEmpty, isMinimumLength } from "../../utils";
import { useAuth } from "../../contexts/Auth";
import { useToast } from "../../contexts/Toast";
import Loading from "../Loading";
import FormInput from "../FormInput";

const Login = ({ isShow, onClose, onSwitchToRegister }) => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login, loginPending } = useAuth();
  const { showToast } = useToast();

  useEffect(() => reset(), [isShow]);

  const validate = () => {
    const errs = {};

    if (isEmpty(fields.email)) errs.email = "email is required";
    else if (!isEmail(fields.email)) errs.email = "email is invalid";
    if (isEmpty(fields.password)) errs.password = "password is required";
    else if (!isMinimumLength(fields.password))
      errs.password = "password must be at least 6 characters";

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = { email: fields.email, password: fields.password };
    const res = await login(payload);
    if (res?.status === 200) {
      showToast("Log in successfully", "success");
      reset();
      onClose();
    } else {
      showToast(
        res?.data?.errors?.message || "Errors occur while logging in",
        "danger"
      );
    }
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

  const reset = () => {
    setFields({ email: "", password: "" });
    setErrors({});
  };

  return (
    <section className={`md:px-0 px-4`}>
      <Overlay isShow={isShow} onClose={onClose} />

      <div
        className={`max-w-md w-full h-fit p-10 bg-white shadow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 authen-shadow no-scrollbar ${
          isShow
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-50"
        } transition-all duration-500`}>
        <div className='mb-10'>
          <p className='text-[#e2bd99] font-semibold text-4xl'>RetailFlow</p>
          <p>Get started with RetailFlow</p>
        </div>

        <form onSubmit={handleLogin} className='flex flex-col gap-12'>
          <div className='flex flex-col gap-4'>
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
            />
            <div className='flex items-center justify-between'>
              <p
                className='cursor-pointer underline'
                onClick={onSwitchToRegister}>
                register
              </p>
              <p className='cursor-pointer underline'>forgot password</p>
            </div>
          </div>
          <div>
            <Button
              text={loginPending ? <Loading color='#274b60' /> : "login"}
              customStyle={`w-full py-4 justify-center border-2 border-black hover:bg-[#e2bd99] hover:text-white ${
                loginPending
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : "opacity-100 pointer-events-auto"
              }`}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
