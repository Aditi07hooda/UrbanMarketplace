import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";
import { getAllProducts } from "../../../actions/productAction";

const MobileComponent = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <form
      className="w-full flex items-center justify-center  mt-4 bg-white border rounded-md overflow-hidden shadow-md"
      onSubmit={searchSubmitHandler}
    >
      <div className="flex w-full">
        <input
          type="text"
          className="flex-grow px-4 py-1 text-black border-none focus:ring-0 focus:outline-none"
          placeholder="Search for products..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 text-black font-semibold flex items-center justify-center transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black pt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l6-6m0 0l-6-6m6 6H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

const DesktopComponent = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <form
      className="flex items-center justify-center mx-8 bg-white border rounded-md overflow-hidden shadow-md"
      onSubmit={searchSubmitHandler}
    >
      <input
        type="text"
        className="text-black flex-grow px-4 py-1 border-none focus:ring-0 focus:outline-none"
        placeholder="Search for products..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className=" px-6 py-2 text-black font-semibold flex items-center justify-center  transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black pt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l6-6m0 0l-6-6m6 6H3"
          />
        </svg>
      </button>
    </form>
  );
};

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const reloadHandler = () => {
   
    dispatch(getAllProducts());
     // This will redirect to the homepage
  }
  useEffect(() => {
    // Update the isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
     <nav className="bg-black text-white p-6 z-[100] w-full flex flex-col items-center justify-center">
      <div className="container flex flex-row justify-between items-center w-full max-w-5xl">
       <Link to="/">
        <button onClick={reloadHandler}>
          <h2 className={`text-${isMobile?'sm':'xl'} font-semibold`}>UrbanMarketplace</h2>
        </button>
        </Link>
        {!isMobile ? <DesktopComponent /> : null}

        {/* <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-[80%] sm:w-[300px] h-8"
              style={{ width: "484px" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleSearchSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l6-6m0 0l-6-6m6 6H3"
                  />
                </svg>
              </button>
            </span>
          </div>
          <a href="#" className="flex items-center hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16M4 8h16M4 12h16"
              />
            </svg>
          </a>
        </div> */}
        <div className="flex flex-row items-center space-x-4">
          <div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button className="hover:text-gray-300" onClick={logoutHandler}>
                  Logout
                </button>
                <button>
                  <Link to="/account">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM15 10a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </button>
              </div>
            ) : (
              <button className="flex flex-row items-center hover:text-gray-300">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
          <Link to="/cart" className="flex items-center hover:text-gray-300">
            <FiShoppingBag className="text-xl" />
            <sup className="ml-1">{cartItems.length}</sup>
          </Link>
        </div>
      </div>
      {isMobile ? <MobileComponent /> : null}
    </nav>
  );
};

export default Header;
