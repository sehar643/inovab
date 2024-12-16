import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/news", label: "News" },
    { path: "/media", label: "Media" },
    { path: "/transparency", label: "Transparency" },
    { path: "/contact", label: "Contact Us" },
    ...(isAuthenticated ? [{ path: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-between px-4 lg:px-20 py-4 bg-gradient-to-b from-gray-100 to-white z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleNavClick}>
            <img src="/logo.png" alt="Logo" className="h-8 lg:h-11" />
          </Link>
        </div>

        {/* Mobile Menu (Full Screen) */}
        <div
          className={`${
            isOpen ? "fixed inset-0 bg-white z-50 pt-20" : "hidden"
          } lg:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={`relative text-gray-700 hover:text-gray-900 py-2 group inline-block`}
                onClick={handleNavClick}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ease-out
                  ${isActive(path) ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
                ></span>
              </NavLink>
            ))}

            {/* Conditional Auth Buttons in Mobile Menu */}
            <div className="flex flex-col w-full space-y-2 pt-4">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" onClick={handleNavClick}>
                    <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
                      Login
                    </button>
                  </Link>
                  <Link to="/signUp" onClick={handleNavClick}>
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                      Get started
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <button onClick={toggleMenu} className="z-50 lg:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:flex-row items-center space-x-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={`relative text-gray-700 hover:text-gray-900 group`}
              onClick={handleNavClick}
            >
              {label}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ease-out
                ${isActive(path) ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" onClick={handleNavClick}>
                <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
                  Login
                </button>
              </Link>
              <Link to="/signUp" onClick={handleNavClick}>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                  Get started
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <div className="h-16 lg:h-20"></div>
      <hr />
    </>
  );
};

export default Navbar;
