import React from "react";
import MainHeader from "./Components/Header/MainHeader";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router";
function DashboardLayout() {
  return (
      <>
      <MainHeader/>
      <Outlet/>
      <Footer/>
      </>
  );
}

export default DashboardLayout;
