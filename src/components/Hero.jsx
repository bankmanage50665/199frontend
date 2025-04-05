import React from "react";
import { assets } from "../assets/assets";
import {Link} from "react-router-dom"
import neemPowder from "../assets/neemPowder.png"

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 shadow-sm">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#f8f7f3] py-12 sm:py-16 px-6 sm:px-10">
        <div className="text-[#3a5a40]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-12 h-[2px] bg-[#3a5a40]"></p>
            <p className="font-medium text-sm md:text-base tracking-wider">
              ORGANIC CERTIFIED
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl py-4 leading-tight">
            Pure Neem Powder
          </h1>
          <p className="text-[#5a7b5c] pb-4 max-w-md">
            Sustainably harvested from premium Azadirachta indica leaves for
            natural skincare, haircare, and wellness
          </p>
          <div className="flex items-center gap-3 mt-2">
            <Link
              to="/collection"
              className="bg-[#3a5a40] text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-[#2d4930] transition-colors"
            >
              SHOP COLLECTION
            </Link>
            <div className="flex items-center gap-2 ml-4">
              {/* <p className="font-medium text-sm md:text-base">LEARN MORE</p> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 relative min-h-[300px] sm:min-h-[450px]">
        <img
          className="w-full h-full object-cover"
          // src={assets.hero_img}
          src={neemPowder}
          alt="Premium organic neem powder"
        />
        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-[#3a5a40] font-medium">100% Natural</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
