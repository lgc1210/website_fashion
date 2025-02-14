import React, { useEffect, useState } from "react";
import Overlay from "../Overlay";
import Button from "../Button";
import {
  isConfirmPassword,
  isEmail,
  isEmpty,
  isMinimumLength,
  isPhone,
} from "../../utils";
import { useAuth } from "../../contexts/Auth";
import { useToast } from "../../contexts/Toast";
import Loading from "../Loading";
import FormInput from "../FormInput";

const Register = ({ isShow, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { register, registerPending, openLoginModal } = useAuth();
  const { showToast } = useToast();

  useEffect(() => reset(), [isShow]);

  const validate = () => {
    const errs = {};

    if (isEmpty(fullname)) errs.fullname = "fullname is required";
    if (isEmpty(email)) errs.email = "email is required";
    else if (!isEmail(email)) errs.email = "email is invalid";
    if (isEmpty(phone)) errs.phone = "phone is required";
    else if (!isPhone(phone)) errs.phone = "phone is invalid";
    if (isEmpty(password)) errs.password = "password is required";
    else if (!isMinimumLength(password))
      errs.password = "password must be at least 6 characters";
    if (!isEmpty(password) && !isConfirmPassword(password, confirmPassword))
      errs.confirmPassword = "confirm password is incorrect";

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = { fullname, email, password, phone };
    const res = await register(payload);
    if (res?.status === 201) {
      showToast("Account created successfully", "success");
      openLoginModal();
      reset();
    } else {
      showToast(res?.data?.errors?.message, "danger");
    }
  };

  const reset = () => {
    setFullname("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <>
      <section className={`md:px-0 px-4`}>
        <Overlay isShow={isShow} onClose={onClose} />

        <div
          className={`max-w-md w-full h-5/6 max-h-fit p-10 bg-white shadow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 authen-shadow overflow-y-scroll no-scrollbar ${
            isShow
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-50"
          } transition-all duration-500`}>
          <div className='mb-10'>
            <p className='text-[#e2bd99] font-semibold text-4xl'>RetailFlow</p>
            <p>Get started with RetailFlow</p>
          </div>

          <form onSubmit={handleRegister} className='flex flex-col gap-12'>
            <div className='flex flex-col gap-4'>
              <FormInput
                label='full Name'
                id='fullname'
                type='text'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                onInput={() => setErrors((prev) => ({ ...prev, fullname: "" }))}
                onBlur={() => {
                  isEmpty(fullname) &&
                    setErrors((prev) => ({
                      ...prev,
                      fullname: "fullname is required",
                    }));
                }}
                error={errors?.fullname}
              />
              <FormInput
                label='email'
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInput={() => setErrors((prev) => ({ ...prev, email: "" }))}
                onBlur={() => {
                  if (isEmpty(email))
                    setErrors((prev) => ({
                      ...prev,
                      email: "email is required",
                    }));
                  else if (!isEmail(email))
                    setErrors((prev) => ({
                      ...prev,
                      email: "email is invalid",
                    }));
                }}
                error={errors?.email}
              />
              <FormInput
                label='phone'
                id='phone'
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onInput={() => setErrors((prev) => ({ ...prev, phone: "" }))}
                onBlur={() => {
                  if (isEmpty(phone))
                    setErrors((prev) => ({
                      ...prev,
                      phone: "phone is required",
                    }));
                  else if (!isPhone(phone))
                    setErrors((prev) => ({
                      ...prev,
                      phone: "phone is invalid",
                    }));
                }}
                error={errors?.phone}
              />
              <FormInput
                label='password'
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={() => setErrors((prev) => ({ ...prev, password: "" }))}
                onBlur={() => {
                  if (isEmpty(password))
                    setErrors((prev) => ({
                      ...prev,
                      password: "password is required",
                    }));
                  else if (!isMinimumLength(password))
                    setErrors((prev) => ({
                      ...prev,
                      password: "password must be at least 6 characters",
                    }));
                }}
                error={errors?.password}
                togglePasswordVisibility={() => setShowPassword(!showPassword)}
              />
              <FormInput
                label='confirm password'
                id='confirm-password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onInput={() =>
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }))
                }
                onBlur={() => {
                  if (!isConfirmPassword(password, confirmPassword))
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: "confirm password is incorrect",
                    }));
                }}
                error={errors?.confirmPassword}
                togglePasswordVisibility={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              />
              <div className='flex items-center justify-between'>
                <p
                  className='cursor-pointer underline'
                  onClick={onSwitchToLogin}>
                  login
                </p>
              </div>
            </div>
            <div>
              <Button
                text={
                  registerPending ? (
                    <Loading color='#274b60' />
                  ) : (
                    "create an account"
                  )
                }
                customStyle={`w-full py-4 justify-center border-2 border-black hover:bg-[#e2bd99] hover:text-white ${
                  registerPending
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                }`}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
