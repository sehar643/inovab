import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social Section */}
          <div>
            <img
              src="/footerLogo.png"
              alt="logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transparency Company <br /> The Bright Future of Digital Money
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <RiTwitterXLine className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <AiOutlineInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:pl-20 lg:pl-20">
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="/media" className="text-gray-400 hover:text-white">
                  Media
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/partnership"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us For Partnership
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-gray-400 hover:text-white"
                >
                  Consistency & Transparency
                </Link>
              </li>
              <li>
                <Link
                  to="/white-paper"
                  className="text-gray-400 hover:text-white"
                >
                  White Paper
                </Link>
              </li>
              <li>
                <Link to="/criteria" className="text-gray-400 hover:text-white">
                  Reward Distribution Eligibility Criteria
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mb-4">
            <h3 className="text-white font-bold mb-4">NEWSLETTER</h3>
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <AiOutlineMail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 pl-10 rounded bg-transparent border border-gray-600"
                />
              </div>
              <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="mb-4">
          <div className="flex flex-col items-center justify-center px-8 mb-4 text-center space-y-4">
            <p className="text-lg font-semibold">
              IDL151 Limited is a Financial Technology Company.
            </p>
            <p className="text-gray-600">
              It's not a bank but also provides custody services for reserves.
            </p>
            <p className="text-gray-600">
              All company product names are registered with SECP.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white">
                Privacy policy
              </Link>
              <Link
                to="/terms-policy"
                className="text-gray-400 hover:text-white"
              >
                Terms of Use
              </Link>
            </div>
            <p className="text-gray-400">
              {" "}
              Copyright © 2024 IDL151 Limited. All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
