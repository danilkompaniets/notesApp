import React from "react";
import Logo from "./assets/writing.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center flex-row py-[10px]">
      <div className="lg:flex flex-col sm:flex-row justify-center items-center">
        <img src={Logo} className="w-[75px] h-[75px]" />
        <h2 className="font-bold text-xl">NotesApp</h2>
      </div>
    </div>
  );
};

export default Header;
