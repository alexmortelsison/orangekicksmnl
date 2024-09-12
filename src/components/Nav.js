import React from "react";
import { ReactComponent as NikeLogo } from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Service", "Pricing", "Contact"];
const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between">
      <a href="">
        <NikeLogo className="h-20 w-20"></NikeLogo>
      </a>
      <button className="focus:ring-2 focus:ring-gray-200 p-2 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25}></RxHamburgerMenu>
      </button>

      <div className="w-full">
        <ul className="bg-gray-50 text-lg border border-gray-100 rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded cursor-pointer py-2 px-3 ${i === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
          <li></li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
