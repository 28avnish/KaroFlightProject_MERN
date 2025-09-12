import React from "react";
import { Link } from "react-router-dom";
import KaroFlightLogo from "/KaroFlightLogo.png";
// import searchicon from "../assets/images/SVG.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040E4E] text-white pt-12 pb-6">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-center text-[18px]">Stay Updated</div>
        <div className="flex justify-center text-[14px] ">
          Get travel deals and destination inspiration
        </div>
        <div className="flex items-center justify-center space-x-4 mb-5  pb-4">
          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="pl-6 pr-4 py-2 w-full rounded-[14px] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-[#FF621F] text-white text-sm font-semibold hover:scale-105 transition rounded-[14px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full pt-3 flex flex-col border-t-2 border-gray-300 ">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center sm:text-left px-4">
          {/* Logo + Tagline + Social */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={KaroFlightLogo}
              alt="KaroFlight Logo"
              className="w-[150px] mb-4"
            />
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Connecting travelers to unforgettable journeys with transparency
              and trust.
            </p>
            <div className="flex  gap-9 md:ml-2 justify-center items-center text-sm font-medium">
              {/* {[FaFacebookF , FaTwitter, FaInstagram, FaLinkedinIn].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="hover:scale-95 transition underline-offset-2 hover:underline"
                >
                  {name}
                </a>
              ))} */}
              <div>
                <Link to="">
                  <FaFacebookF />
                </Link>
              </div>
              <div>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </div>
              <div>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </div>
              <div>
                <Link to="#">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Careers",
                "Offer",
                "Blog Us",
                "Sustainability",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:scale-95 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Top Destinations",
                "Flight Deals",
                "Hotel Deals",
                "Travel Guides",
                "Travel Insurance",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:scale-95 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Resources */}
          <div>
            <h4 className="font-semibold mb-4">Travel Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Help Center",
                "Travel Blog",
                "Mobile App",
                "Price Alerts",
                "Group Travel",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:scale-95 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Customer Support",
                "Partner With Us",
                "Travel Agents",
                "Corporate Travel",
                "Feedback",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:scale-95 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500 px-10">
          <p>© {new Date().getFullYear()} KaroFlight. All rights reserved.</p>
          <div className="flex space-x-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
