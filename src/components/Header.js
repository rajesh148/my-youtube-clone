import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const onClickMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => onClickMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 ml-3 cursor-pointer"
            alt="logoIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 p-2 rounded-l-full border border-gray-400"
          type="text"
        />
        <button className="border p-2 border-gray-400 rounded-r-full">
          search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="userIcon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
