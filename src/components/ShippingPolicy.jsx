import { useState } from "react";
import {
  Truck,
  Clock,
  Info,
  MapPin,
  IndianRupee,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ShippingPolicy() {
  const [expandedSections, setExpandedSections] = useState({
    standard: true,
    coverage: false,
    tracking: false,
    returns: false,
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Shipping Policy
        </h1>
        <p className="text-gray-600">Last updated: May 1, 2025</p>
      </div>

    

      {/* Standard Shipping Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("standard")}
        >
          <div className="flex items-center">
            <Truck className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Standard Shipping
            </h2>
          </div>
          {expandedSections.standard ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.standard && (
          <div className="mt-4 pl-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-center mb-3">
                  <Clock className="text-gray-700 mr-2" size={16} />
                  <h3 className="font-medium text-gray-800">Delivery Time</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Metro Cities: 3-5 business days</li>
                  <li>• Other Urban Areas: 5-7 business days</li>
                  <li>• Rural Areas: 7-10 business days</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-center mb-3">
                  <IndianRupee className="text-gray-700 mr-2" size={16} />
                  <h3 className="font-medium text-gray-800">Shipping Costs</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>All  Orders : Free Shipping</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">
                Our standard shipping service is provided through reputable
                courier partners. Please note that delivery times are estimates
                and may vary based on your location and other factors.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Coverage Area Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("coverage")}
        >
          <div className="flex items-center">
            <MapPin className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Coverage Area
            </h2>
          </div>
          {expandedSections.coverage ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.coverage && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We deliver to all major cities and towns across India. However,
              some remote areas may experience longer delivery times or be
              subject to additional shipping charges.
            </p>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-gray-800 mb-2">
                Areas with Potential Delivery Restrictions:
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Andaman and Nicobar Islands</li>
                <li>• Lakshadweep</li>
                <li>• Certain remote areas in Northeast India</li>
                <li>• International destinations (currently not available)</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Order Tracking Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("tracking")}
        >
          <div className="flex items-center">
            <Info className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Order Tracking
            </h2>
          </div>
          {expandedSections.tracking ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.tracking && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              After your order ships, you will receive a confirmation email with
              a tracking number and link to track your package. You can also
              track your order through your account on our website.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-700">
                Please allow up to 24 hours for tracking information to become
                available after receiving your shipping confirmation.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Returns Section */}
      <div>
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("returns")}
        >
          <div className="flex items-center">
            <Truck
              className="text-gray-700 mr-3 transform rotate-180"
              size={20}
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Returns & Refunds
            </h2>
          </div>
          {expandedSections.returns ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.returns && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We offer a 30-day return policy for most items. To be eligible for
              return, your item must be unused and in the same condition that
              you received it, with all original packaging and tags.
            </p>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-medium text-gray-800 mb-2">
                Return Shipping Costs:
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>
                  • Item received damaged or defective: Free return shipping
                </li>
                <li>
                  • Change of mind or other reasons: ₹199 return shipping fee
                </li>
              </ul>
            </div>

            <p className="text-gray-600">
              Refunds will be processed within 7-10 business days after we
              receive and inspect the returned item. For more information,
              please refer to our full Return Policy.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          For any questions regarding our shipping policy, please contact our
          customer support team at rahulkumawat50665@gmail.com or call us at +91
          6377408633  (Mon-Sat, 10AM-7PM IST).
        </p>
      </div>
    </div>
  );
}
