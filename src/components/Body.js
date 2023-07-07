import React from "react";
import { Outlet } from "react-router-dom";
import MianContent from "./MianContent";
import Slidbar from "./Sidebar";
import WatchPage from "./WatchPage";

const Body = () => {
  return (
    <div className="flex">
      <Slidbar />
      <Outlet />
    </div>
  );
};

export default Body;
