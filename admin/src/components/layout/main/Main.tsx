import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  return (
    <main className="flex-1 bg-zinc-200 overflow-scroll lg:overflow-x-hidden lg:w-full m-0 mx-auto h-full">
      <Outlet />
    </main>
  );
};

export default Main;
