import React, { useEffect } from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails, logout } from "../../redux/reducers/authSlice";
import { useState } from "react";
import { asideToggle } from "../../../redux/reducers/sharedSlice";
import { RootState } from "../../../redux/store";
import Search from "../search/Search";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { showAside } = useSelector((state: RootState) => state.shared);

  const userInfo = true;
  const loading = false;

  return (
    <header className="border-b-2 border-zinc-200 bg-white p-0 ">
      <div className="relative px-5 h-[72px] mx-auto flex items-center justify-center lg:flex-nowrap w-full">
        <div className="flex items-center w-full h-full flex-1">
          <nav className="flex items-center font-sans h-full9 w-full lg:w-auto">
            <button
              type="button"
              aria-label="hamburger menu toggle"
              onClick={() => dispatch(asideToggle(!showAside))}
              className={
                "z-30 top-4 right-6 group mr-8 " +
                (showAside ? "top-7 sm:top-4" : "")
              }
            >
              <div className="relative flex items-center justify-center rounded-full w-6 h-6 transform transition-all duration-200">
                <div
                  className={
                    "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center " +
                    (showAside ? "" : "")
                  }
                >
                  <div className="bg-dark-gray h-[2px] w-[20px] rounded transform transition-all duration-300 origin-right delay-75 "></div>
                  <div
                    className={
                      "bg-dark-gray h-[2px] w-[10px] rounded relative" +
                      (showAside ? "ml-auto" : "")
                    }
                  ></div>
                  <div className="bg-dark-gray h-[2px] w-[20px] rounded self-end transform transition-all duration-300 origin-left delay-75 "></div>
                </div>
              </div>
            </button>
          </nav>
          <img
            src={logo}
            alt="learnwell logo"
            className="lg:w-24 h-6 lg:mr-24"
          />
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>
        <div className="flex items-center justify-end lg:justify-center ml-auto w-4/5 lg:w-auto">
          <div className="lg:hidden">
            <button
              className="mr-2 lg:mr-4 my-auto"
              aria-label="search"
              onClick={() => dispatch(asideToggle(!showAside))}
            >
              <span className="sr-only">search</span>
              <svg
                className="stroke-zinc-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4438 16.4438L21.0001 21.0001"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {userInfo ? (
            <button
              className="user flex items-center"
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              type="button"
            >
              <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col align-start"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin-profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Admin Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </button>
          ) : (
            <>
              {loading ? (
                <p className="text-sm">Loading...</p>
              ) : (
                <Link
                  to="/"
                  className="w-auto flex text-sm items-center justify-center border-b border-blue text-blue hover:border-none transtion-all font-semibold"
                >
                  Sign in
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
