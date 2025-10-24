import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-normal ${
        isActive ? "text-white bg-gray-400" : "text-white hover:text-gray-400"
      }`
    }
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/about">About Us</NavItem>
          </li>
          <li>
            <NavItem to="/contact">Contact</NavItem>
          </li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
        />
      </div>

      {/* -------- Mobile Menu -------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close"
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block text-slate-700 hover:text-sky-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block text-slate-700 hover:text-sky-700"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block text-slate-700 hover:text-sky-700"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
