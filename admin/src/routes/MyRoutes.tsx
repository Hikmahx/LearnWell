import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "../components/layout/layout/Layout";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const MyRoutes = () => {
  useScrollToTop();

  return (
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

export default MyRoutes;
 