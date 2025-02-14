import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuth } from "./contexts/Auth";
import Chat from "./components/Chat";

function App() {
  const {
    authModalType,
    openLoginModal,
    openRegisterModal,
    closeAuthModal,
    isAuthenticated,
    user,
  } = useAuth();

  return (
    <>
      <Routes>
        {routes?.map(({ path, layout: Layout, children }) => {
          return (
            <Route key={path} element={<Layout />}>
              {children?.map(
                ({ path: childPath, element: Element, public: isPublic }) => {
                  return (
                    <Route
                      key={childPath}
                      path={childPath}
                      element={
                        isPublic ? (
                          <Element />
                        ) : (
                          <ProtectedRoute element={Element} />
                        )
                      }
                    />
                  );
                }
              )}
            </Route>
          );
        })}

        {/* Not Found Page */}
        <Route
          path='*'
          element={
            <div className='flex flex-col items-center justify-center min-h-screen'>
              <h1 className='text-4xl font-bold'>404</h1>
              <p className='mt-2'>Page not found</p>
            </div>
          }
        />
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
    </>
  );
}

export default App;
