import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import NeemLeaves from "../assets/NeemLeaves.jpg";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={NeemLeaves}
          alt="Neem powder production"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            NaturePure Neem was born out of a passion for natural wellness and a
            desire to bring the ancient healing power of neem to modern
            consumers. Our journey began with a simple idea: to provide pure,
            organic neem products that harness the incredible benefits of this
            remarkable tree, known as "the village pharmacy" in Ayurvedic
            tradition.
          </p>
          <p>
            Since our inception, we've worked tirelessly to cultivate and
            process the highest quality neem using sustainable farming
            practices. Our farms are located in pristine environments, away from
            industrial pollution, ensuring that every batch of neem powder is
            rich in beneficial compounds and free from harmful contaminants.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at NaturePure Neem is to empower people to embrace
            natural solutions for health, agriculture, and personal care. We're
            dedicated to preserving traditional knowledge while utilizing modern
            technology to deliver premium neem products that make a positive
            impact on both human wellbeing and environmental sustainability.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-green-50">
          <b className="text-green-800">Organic Certification:</b>
          <p className="text-gray-600">
            Our neem products are certified organic, grown without synthetic
            pesticides or fertilizers, ensuring maximum purity and potency.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-green-50">
          <b className="text-green-800">Sustainable Practices:</b>
          <p className="text-gray-600">
            We employ eco-friendly cultivation and processing methods that
            protect biodiversity and preserve the natural ecosystem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-green-50">
          <b className="text-green-800">Quality Assurance:</b>
          <p className="text-gray-600">
            Every batch of our neem powder is laboratory tested for purity,
            potency, and safety, ensuring you receive only the finest quality
            product.
          </p>
        </div>
      </div>

      <div className="bg-green-100 py-10 px-6 mb-16 rounded-lg">
        <h3 className="text-xl text-center text-green-800 mb-6">
          The Power of Neem
        </h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h4 className="font-bold mb-2">Agricultural Benefits</h4>
            <p className="text-gray-700 mb-4">
              Neem is nature's own pesticide, offering effective protection
              against over 200 species of pests without harming beneficial
              insects or the environment.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">Health & Wellness</h4>
            <p className="text-gray-700 mb-4">
              For centuries, neem has been used in traditional medicine for its
              antibacterial, antifungal, and immune-boosting properties.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">Personal Care</h4>
            <p className="text-gray-700 mb-4">
              Neem's natural compounds make it ideal for skin care, hair care,
              and oral hygiene products, providing gentle yet effective
              solutions.
            </p>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
