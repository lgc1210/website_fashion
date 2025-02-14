import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Toast from "../components/Toast";

// Create Context for Toast
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (toast.isVisible) {
      timeoutRef.current = setTimeout(close, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [toast.isVisible]);

  const showToast = (message, type = "success") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setToast({ message, type, isVisible: true });

    // Hide toast after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setToast({ message: "", type: "", isVisible: false });
    }, 3000);
  };

  const close = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setToast((prev) => ({ ...prev, isVisible: false }));

    // Fully remove toast after fade-out animation
    setTimeout(() => {
      setToast({ message: "", type: "", isVisible: false });
    }, 300); // Adjust to match the CSS transition time
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={close}
        visible={toast.isVisible}
      />
    </ToastContext.Provider>
  );
};

// Custom Hook to use Toast
export const useToast = () => useContext(ToastContext);
