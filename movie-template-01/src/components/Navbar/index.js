import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "datas";

const Navbar = () => {
  return (
    <div className="z-50 w-full flex items-center justify-between space-x-5 p-5 bg-black">
      <Link to="/">
        <h4 className="uppercase font-AtypDisplayBold text-green-500">
          MovieEBG
        </h4>
      </Link>
      <div className="justify-between w-full space-x-5 hidden lg:flex">
        <ul className="flex items-center justify-center space-x-5">
          {navItems.map((singleNavItem) => {
            return (
              <NavLink
                key={singleNavItem.providedLink}
                to={singleNavItem.providedLink}
              >
                <li>{singleNavItem.title}</li>
              </NavLink>
            );
          })}
        </ul>
        <div className="flex bg-gray-800 overflow-hidden rounded-md">
          <input
            type="text"
            className="px-8 py-3 border-none outline-none bg-transparent"
            placeholder="Search any movie..."
          />
          <button className="bg-green-500 px-5 text-gray-900">
            {/* <BsSearch /> */}
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="text-2xl flex items-center justify-center p-2 lg:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
