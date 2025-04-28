import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Link,
} from "lucide-react";
import { assets } from "../assets/assets";
import SocialMediaLinks from "./SocialMediaLinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 text-sm">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-5">
              Veborg Organics
            </h2>
            <p className="w-full md:w-2/3 text-gray-700 leading-relaxed">
              Vaborg Organic offers premium-quality herbal powders including
              moringa, neem, and rose petals, sourced directly from trusted
              sustainable farms. Our products are 100% natural, pesticide-free,
              and carefully processed to preserve the rich nutrients and
              traditional wellness benefits cherished for generations.
            </p>

            <SocialMediaLinks />
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collection"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  Neem Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-800 transition-colors duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-700" />
                <span>6377408633</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-700" />
                <span>rahul50665@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-700 mt-1 flex-shrink-0" />
                <span>Veborg Organics, Kota(Rajasthan)</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-emerald-800 mb-3 uppercase tracking-wider">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-3 text-sm border border-emerald-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full bg-white/90"
                  aria-label="Email for newsletter"
                />
                <button className="bg-emerald-700 text-white px-4 rounded-r-md hover:bg-emerald-800 transition-colors flex items-center justify-center">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-800 text-white">
        <div className="container mx-auto px-6">
          <div className="py-6 text-sm text-center">
            <p>
              © 2024 NeemPure Organics - All Rights Reserved. 100% Organic Neem
              Products.
            </p>
            <p className="mt-1 text-emerald-100 text-xs">
              Naturally Pure. Ethically Sourced. Traditionally Crafted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
