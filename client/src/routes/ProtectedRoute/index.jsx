import React, { useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import { useToast } from "../../contexts/Toast";

const ProtectedRoute = ({ element: Element }) => {
  const { isAuthenticated, openLoginModal } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    if (!isAuthenticated()) {
      showToast("You need to log in first.", "warning");
      openLoginModal();
    }
  }, []);

  return Element;
};

export default ProtectedRoute;
