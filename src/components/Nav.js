import React from "react";
import { ReactComponent as NikeLogo } from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { hover } from "@testing-library/user-event/dist/hover";

const ROUTES = ["Home", "About", "Service", "Pricing", "Contact"];

const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between">
      <a>
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="focus:ring-2 focus:ring-gray-100 rounded-lg p-2 hover:bg-gray-100">
        <RxHamburgerMenu size={25} />
      </button>
      <div className="w-full">
        <ul>
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` rounded cursor-pointer px-3 py-2 ${
                  i === 0 ? "bg-blue-500" : "hover:bg-gray-100"
                }`}
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
