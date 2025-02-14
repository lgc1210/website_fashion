import React, { memo } from "react";
import styles from "./index.module.css";

const Overlay = ({ isShow, onClose }) => {
  return (
    <div
      className={`${styles.overlay} ${isShow ? styles.show : styles.hide}`}
      onClick={onClose}></div>
  );
};

export default memo(Overlay);
