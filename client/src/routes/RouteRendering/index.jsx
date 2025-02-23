import React, { Suspense, lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import routes from "../routes";

const Chat = lazy(() => import("../../components/Chat"));
const Register = lazy(() => import("../../components/Register"));
const Loading = lazy(() => import("../../components/Loading"));
const Login = lazy(() => import("../../components/Login"));

const RouteRendering = () => {
  const {
    authModalType,
    openLoginModal,
    openRegisterModal,
    closeAuthModal,
    isAuthenticated,
    user,
  } = useAuth();

  return (
    <Suspense
      fallback={
        <Loading
          size={50}
          spinStyle=''
          wrapSpinStyle='flex flex-col items-center justify-center h-[100vh]'
          hasLoadingText
        />
      }>
      <Routes>
        {routes.map(({ path, Layout, children, Page }) =>
          !Layout ? (
            <Route key={path} path={path} element={<Page />} />
          ) : (
            <Route key={path} path={path} element={<Layout />}>
              {children.map(({ path: childPath, Page, isPublic }) => (
                <Route
                  key={childPath}
                  path={childPath}
                  element={
                    isPublic ? <Page /> : <ProtectedRoute element={<Page />} />
                  }
                />
              ))}
            </Route>
          )
        )}
      </Routes>

      {/* Authentication Components */}
      <Login
        isShow={authModalType === "login" && !isAuthenticated()}
        onClose={closeAuthModal}
        onSwitchToRegister={openRegisterModal}
      />
      <Register
        isShow={authModalType === "register" && !isAuthenticated()}
        onClose={closeAuthModal}
        onSwitchToLogin={openLoginModal}
      />

      {/* Chat with a consultant */}
      {user?.role !== "admin" && <Chat />}
    </Suspense>
  );
};

export default RouteRendering;
