import React from "react";
import Header from "../header/Header";
import Aside from "../aside/Aside";
import Main from "../main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="bg-[linear-gradient(90deg,_white_50%,_#e4e4e7_0)]">
        <section className="flex min-h-[calc(100vh_-_72px)] mx-auto bg-zinc-200">
          <Aside />
          <Main />
        </section>
      </div>
    </>
  );
};

export default Layout;
