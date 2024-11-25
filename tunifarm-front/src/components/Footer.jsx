import React from "react";
import {
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:flex md:justify-between md:items-center">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">TuniFarm</h2>
          <p className="mt-2 text-gray-400">
            Connecting local farmers with communities for fresh, organic, and
            sustainable produce.
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <span className="hover:text-gray-200 cursor-pointer">
                About Us
              </span>
            </li>
            <li>
              <span className="hover:text-gray-200 cursor-pointer">
                Our Services
              </span>
            </li>
            <li>
              <span className="hover:text-gray-200 cursor-pointer">
                Contact Us
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="mt-2 space-y-2">
            <p className="flex items-center text-gray-400">
              <PhoneIcon className="w-5 h-5 mr-2 text-gray-400" />
              +216 123 456 789
            </p>
            <p className="flex items-center text-gray-400">
              <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-400" />
              contact@tunifarm.com
            </p>
            <p className="flex items-center text-gray-400">
              <GlobeAltIcon className="w-5 h-5 mr-2 text-gray-400" />
              www.tunifarm.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TuniFarm. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-gray-200 cursor-pointer">
              <GlobeAltIcon className="w-5 h-5" />
            </span>
            <span className="text-gray-400 hover:text-gray-200 cursor-pointer">
              <EnvelopeIcon className="w-5 h-5" />
            </span>
            <span className="text-gray-400 hover:text-gray-200 cursor-pointer">
              <PhoneIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
