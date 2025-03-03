import React from "react";
import {
  AiOutlineCrown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { navLinks } from "../constant/constants";
const NavigationComponent = () => {
  return (
    <div className="mx-2 lg:mx-10 xl:mx-20 2xl:mx-70 flex justify-between items-center cursor-pointer">
      <div className="flex items-center gap-2">
        <AiOutlineCrown className="text-primary text-6xl" />
        <div className=" flex flex-col">
          <h1 className="text-2xl tracking-widest font-times text-primary">
            HOTELER
          </h1>
          <h1 className="text-xs font-helvetica">LUXURY HOTEL</h1>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex justify-between">
          {navLinks.map((navlink) => (
            <li key={navlink} className="text-sm font-helvetica text-white mx-2 hover:text-primary hover:decoration-primary">
              {navlink}
            </li>
          ))}
        </ul>
          </div>
          
          <div className="flex gap-5 text-2xl">
              <AiOutlineSearch />
              <AiOutlineShoppingCart />
              <AiOutlineMenu className="lg:hidden" />
          </div>
    </div>
  );
};

export default NavigationComponent;
