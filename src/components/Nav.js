import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import { ReactComponent as NikeLogo } from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Service", "Pricing", "Contact"];

const Nav = () => {
  const [isMobileMenuShown, setisMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <a href="/">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setisMobileMenuShown(!isMobileMenuShown)}
        className="focus:ring-2 focus:ring-gray-200 rounded-lg p-2 hover:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full lg:w-auto lg:block `}
      >
        <ul className="lg:space-x-8 border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg rounded-lg p-4 flex flex-col lg:flex-row">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded cursor-pointer px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white  lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md flex">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
