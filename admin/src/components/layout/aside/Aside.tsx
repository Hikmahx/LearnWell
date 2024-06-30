import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { asideToggle } from "../../../redux/reducers/sharedSlice";
import Search from "../search/Search";

const Aside = () => {
  const dispatch = useDispatch();

  const { showAside } = useSelector((state: RootState) => state.shared);

  return (
    <aside
      className={
        "w-[200px bg-white transition-all max-h-screen sticky top-0 " +
        (showAside ? "" : "w-[72px]")
      }
    >
      <nav className="">
        <ul className="space-y-3 px-5  py-6 ">
          <li className="mb-3">
            <div className="lg:hidden">
              <Search />
            </div>
          </li>
          <li className="mb-3">
            <NavLink
              to=""
              onClick={() => dispatch(asideToggle(false))} //closes aside
              className={({ isActive }) =>
                "flex items-center w-full py-1 px-2 h-10 " +
                (isActive
                  ? "bg-blue rounded-lg text-white stroke-white"
                  : "stroke-dark-gray")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 12.9999V9.99989C9.5 9.86728 9.44732 9.7401 9.35355 9.64634C9.25979 9.55257 9.13261 9.49989 9 9.49989H7C6.86739 9.49989 6.74021 9.55257 6.64645 9.64634C6.55268 9.7401 6.5 9.86728 6.5 9.99989V12.9999C6.5 13.1325 6.44732 13.2597 6.35355 13.3534C6.25979 13.4472 6.13261 13.4999 6 13.4999H3C2.86739 13.4999 2.74021 13.4472 2.64645 13.3534C2.55268 13.2597 2.5 13.1325 2.5 12.9999V7.21864C2.50112 7.14944 2.51607 7.08117 2.54398 7.01784C2.57189 6.95451 2.61219 6.89741 2.6625 6.84989L7.6625 2.30614C7.75467 2.22181 7.87507 2.17505 8 2.17505C8.12493 2.17505 8.24533 2.22181 8.3375 2.30614L13.3375 6.84989C13.3878 6.89741 13.4281 6.95451 13.456 7.01784C13.4839 7.08117 13.4989 7.14944 13.5 7.21864V12.9999C13.5 13.1325 13.4473 13.2597 13.3536 13.3534C13.2598 13.4472 13.1326 13.4999 13 13.4999H10C9.86739 13.4999 9.74021 13.4472 9.64645 13.3534C9.55268 13.2597 9.5 13.1325 9.5 12.9999Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={
                  "ml-2 transition-all " + (showAside ? "" : "sr-only")
                }
              >
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="subjects"
              onClick={() => dispatch(asideToggle(false))}
              className={({ isActive }) =>
                "flex items-center w-full py-1 px-2 h-10 " +
                (isActive
                  ? "bg-blue rounded-lg text-white stroke-white"
                  : "stroke-dark-gray")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2.5H12.5C12.6326 2.5 12.7598 2.55268 12.8536 2.64645C12.9473 2.74021 13 2.86739 13 3V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14H3.5C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V3C3 2.86739 3.05268 2.74021 3.14645 2.64645C3.24021 2.55268 3.36739 2.5 3.5 2.5H6"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 4.5V4C5.5 3.33696 5.76339 2.70107 6.23223 2.23223C6.70107 1.76339 7.33696 1.5 8 1.5C8.66304 1.5 9.29893 1.76339 9.76777 2.23223C10.2366 2.70107 10.5 3.33696 10.5 4V4.5H5.5Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={
                  "ml-2 transition-all " + (showAside ? "" : "sr-only")
                }
              >
                Subjects
              </span>
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="quiz"
              onClick={() => dispatch(asideToggle(false))} //closes aside
              className={({ isActive }) =>
                "flex items-center w-full py-1 px-2 h-10 " +
                (isActive
                  ? "bg-blue rounded-lg text-white stroke-white"
                  : "stroke-dark-gray")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 13H1.75"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.25 13V5.5H9.75"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.25 2.5H9.75V13H13.25V2.5Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.75 13V8.5H6.25"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={
                  "ml-2 transition-all " + (showAside ? "" : "sr-only")
                }
              >
                Quiz
              </span>
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="users"
              onClick={() => dispatch(asideToggle(false))} //closes aside
              className={({ isActive }) =>
                "flex items-center w-full py-1 px-2 h-10 " +
                (isActive
                  ? "bg-blue rounded-lg text-white stroke-white"
                  : "stroke-dark-gray")
              }
            >
              <svg
                className="w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <span
                className={
                  "ml-2 transition-all " + (showAside ? "" : "sr-only")
                }
              >
                Users
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
