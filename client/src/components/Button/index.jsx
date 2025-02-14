import React, { memo } from "react";

const Button = ({
  text,
  LeftIcon,
  RightIcon,
  onClick,
  customStyle = "",
  iconStyle = "",
  size,
}) => {
  const style = `
    flex items-center gap-4 uppercase cursor-pointer transition-all text-lg group ${customStyle}`;

  return (
    <button className={style} onClick={onClick}>
      {LeftIcon ? <LeftIcon size={size} className={iconStyle} /> : <></>}
      {text}
      {RightIcon ? <RightIcon size={size} className={iconStyle} /> : <></>}
    </button>
  );
};

export default memo(Button);
