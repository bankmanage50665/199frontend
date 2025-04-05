import React from "react";
import { RefreshCw, Award, HeadphonesIcon } from "lucide-react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center">
          {/* Easy Exchange Feature */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-8 h-8 text-emerald-700" />
            </div>
            <p className="font-semibold text-emerald-800 text-lg mb-2">
              Easy Exchange Policy
            </p>
            <p className="text-gray-500 leading-relaxed">
              We offer hassle-free exchange for all our organic neem products
            </p>
          </div>

          {/* Return Policy Feature */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-emerald-700" />
            </div>
            <p className="font-semibold text-emerald-800 text-lg mb-2">
              7 Days Return Policy
            </p>
            <p className="text-gray-500 leading-relaxed">
              Experience our products with confidence, backed by our 7-day
              return guarantee
            </p>
          </div>

          {/* Customer Support Feature */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeadphonesIcon className="w-8 h-8 text-emerald-700" />
            </div>
            <p className="font-semibold text-emerald-800 text-lg mb-2">
              Best Customer Support
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our dedicated team provides 24/7 assistance for all your inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
