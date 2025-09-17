import React from "react";
import { Link } from "react-router-dom";
import KaroFlightLogo from "/KaroFlightLogo.png";
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
        <div className="flex justify-center text-[14px] text-center px-4">
          Get travel deals and destination inspiration
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-5 pb-4 px-4">
          <div className="relative w-full sm:w-[300px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="pl-6 pr-4 py-2 w-full rounded-[14px] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-[#FF621F] text-white text-sm font-semibold hover:scale-105 transition rounded-[14px] w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full pt-3 flex flex-col border-t-2 border-gray-300 ">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center sm:text-left px-4">
          {/* Logo + Tagline + Social */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/">
              <img
                src={KaroFlightLogo}
                alt="KaroFlight Logo"
                className="w-[150px] mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Connecting travelers to unforgettable journeys with transparency
              and trust.
            </p>
            <div className="flex gap-4 md:ml-0 justify-center sm:justify-start items-center text-sm font-medium">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/career">Careers</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/offer">Offers</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/sustainability">Sustainability</Link>
              </li> */}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/destinations">Top Destinations</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/flight-deals">Flight Deals</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/hotel-deals">Hotel Deals</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/travel-guides">Travel Guides</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/travel-insurance">Travel Insurance</Link>
              </li>
            </ul>
          </div>

          {/* Travel Resources */}
          <div>
            <h4 className="font-semibold mb-4">Travel Resources</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/help">Help Center</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/blog">Travel Blog</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Mobile App
                </a>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/price-alerts">Price Alerts</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/group-travel">Group Travel</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/support">Customer Support</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/partners">Partner With Us</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/travel-agents">Travel Agents</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/corporate-travel">Corporate Travel</Link>
              </li>
              <li className="hover:scale-95 cursor-pointer transition">
                <Link to="/feedback">Feedback</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-300 px-4 md:px-10 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} KaroFlight. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;