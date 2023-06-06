import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './App.css'

import { Login, Register, PageNotFound, Product, Edit, Home, BookList } from "./pages";
import { Footer, Header, Searchbar } from "./components";
import { LoginContext, UserContext } from "./contexts";

function App() {

  const [path, setPath] = useState("Login");
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState({});
  const location = useLocation();
  const api_url = import.meta.env.VITE_url;

  useEffect(() => {
    let path = location.pathname;
    let firstchar = path.charAt(1);
    path = path.slice(2);
    setPath(firstchar.toUpperCase() + path);
  }, [location.pathname]);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LoginContext.Provider value={{
        api_url,
        isLogin,
        setIslogin
      }} >
        <UserContext.Provider value={{
          user,
          setUser
        }} >
          <Header />
          <Searchbar />
          {!isLogin ? (
            <div className="max-w-screen my-5 flex items-center justify-center gap-1">
              <p className="font-bold">Home {'> '} </p> <p className="text-red-400 font-bold">{" " + path}</p>
            </div>
          ) : null}

          <div className="my-10 px-24">

            <Routes>
              <Route path="/" element={isLogin ? (<BookList />) : (<Login />)} />
              <Route path='/register' element={isLogin ? (<BookList />) : (<Register />)} />
              <Route path='/login' element={isLogin ? (<BookList />) : (<Login />)} />
              <Route path="/product" element={isLogin ? (<Product />) : (<Login />)} />
              <Route path="/edit" element={isLogin ? (<Edit />) : (<Login />)} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>

          </div>
        </UserContext.Provider>
      </LoginContext.Provider>
      <Footer />
    </>
  )
}

export default App
