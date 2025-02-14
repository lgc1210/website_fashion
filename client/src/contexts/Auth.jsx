import React, { createContext, useContext, useEffect, useState } from "react";
import { userActions } from "../configs/apis";
import { jwtDecode } from "jwt-decode";
import {
  clearTokens,
  getStoredRefreshToken,
  getStoredToken,
  storeTokens,
} from "../utils";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loginPending, setLoginPending] = useState(false);
  const [registerPending, setRegisterPending] = useState(false);
  const [authModalType, setAuthModalType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = getStoredToken();
        if (token) {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            clearTokens();
            setUser(null);
          } else {
            setUser(decoded);
          }
        }
      } catch (error) {
        console.log("Error initialzing auth: ", error);
        clearTokens();
        setUser(null);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated() && user?.role !== "customer") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  }, [user]);

  const openLoginModal = () => setAuthModalType("login");
  const openRegisterModal = () => setAuthModalType("register");
  const closeAuthModal = () => setAuthModalType(null);

  const register = async (payload) => {
    try {
      setRegisterPending(true);
      return await userActions.register(payload);
    } catch (error) {
      console.log("Error while registering", error.message);
      return error?.response;
    } finally {
      setRegisterPending(false);
    }
  };

  const login = async (payload) => {
    try {
      setLoginPending(true);
      const response = await userActions.login(payload);
      if (response.status === 200) {
        const { access, refresh } = response?.data;
        storeTokens(access, refresh);
        const decoded = jwtDecode(access);
        setUser(decoded);
      }
      return response;
    } catch (error) {
      console.log("Error while logging in", error.message);
      return error?.response;
    } finally {
      setLoginPending(false);
    }
  };

  const logout = async () => {
    try {
      const response = await userActions?.logout();
      if (response?.status === 200) {
        clearTokens();
        setUser(null);
        closeAuthModal();
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const isAuthenticated = () => {
    const token = getStoredToken();
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginPending,
        register,
        registerPending,
        logout,
        setUser,
        isAuthenticated,
        authModalType,
        openLoginModal,
        openRegisterModal,
        closeAuthModal,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
