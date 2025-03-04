import { useState, useEffect } from "react";
import { AiOutlineCrown, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../constant/constants";

const VisibleOnScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed -top-25  w-full bg-white shadow-md translate-y-full transition-transform ease-in duration-500 z-200 ${
        isVisible ? "translate-y-0" : "translate-y-full hidden"
      }`}>
      <div className="bodyContent flex justify-between items-center py-4 cursor-pointe">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <AiOutlineCrown className="text-primary text-6xl" />
          <div className="flex flex-col">
            <h1 className="text-2xl tracking-widest font-times text-primary">
              HOTELER
            </h1>
            <h1 className="text-xs font-helvetica">LUXURY HOTEL</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:justify-end">
          <ul className="flex justify-end  gap-10">
            {navLinks.map((navlink, index) => (
              <li
                key={index}
                className="text-md font-helvetica font-extralight text-secondary mx-2 hover:text-primary hover:underline hover:decoration-primary">
                {navlink}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex gap-5 text-2xl lg:hidden">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default VisibleOnScrollNavbar;
