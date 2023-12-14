import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [isSticky, setIsisSticky] = useState(false);

  useEffect(() => {
    const hendeleScroll = () => {
      if (window.scrollY > 100) {
        setIsisSticky(true);
      } else {
        setIsisSticky(false);
      }
    };
    window.addEventListener("scroll", hendeleScroll);

    return () => {
      window.removeEventListener("scroll", hendeleScroll);
    };
  });

  return (
    <header className="w-full bg-main fixed top-0 left-0 right-0 z-10">
      <nav
        className={`px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 border-b-2" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 ">
          <div className="text-main-red text-2xl cursor-pointer w-16 md:w-32 md:h-20 h-12 flex items-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
