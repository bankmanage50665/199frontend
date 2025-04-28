import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Khatu Shyam <br /> Sikar, Rajasthan, India <br /> PIN: 332602
          </p>

          <div className="flex flex-col gap-2 text-gray-600">
            <p className="font-semibold">Tel:</p>
            <a
              href="tel:6377408633"
              className="text-green-700 hover:text-green-900 underline transition-colors duration-300"
            >
              +91 63774 08633
            </a>

            <p className="font-semibold mt-4">Email:</p>
            <a
              href="mailto:rahulkumawat50666@gmail.com"
              className="text-green-700 hover:text-green-900 underline transition-colors duration-300"
            >
              rahulkumawat50666@gmail.com
            </a>
          </div>

          <p className="font-semibold text-xl text-gray-600">Our Branch</p>
          <p className="text-gray-500">
            Coming Soon <br /> Stay tuned for more locations!
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Vaborg Organic
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
