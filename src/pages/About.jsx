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
            Vaborg Organic was born out of a passion for natural wellness and a
            desire to bring the ancient healing power of herbs to modern
            consumers. Our journey began with a simple idea: to provide pure,
            organic herbal products—like moringa, neem, and rose petals—that
            harness the incredible benefits celebrated in traditional practices
            across cultures.
          </p>
          <p>
            Since our inception, we've worked tirelessly to cultivate and
            process the highest quality botanicals using sustainable farming
            practices. Our herbs are sourced from pristine environments, far
            from industrial pollution, ensuring that every batch is rich in
            beneficial nutrients and free from harmful contaminants.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Vaborg Organic is to empower people to embrace
            natural solutions for health, beauty, and personal care. We're
            dedicated to preserving traditional wisdom while utilizing modern
            technology to deliver premium herbal products that support human
            wellbeing and promote environmental sustainability.
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
          The Power of Herbal Powders
        </h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h4 className="font-bold mb-2">Moringa Powder</h4>
            <p className="text-gray-700 mb-4">
              Known as the "Miracle Tree," moringa is rich in vitamins,
              minerals, and antioxidants, supporting energy, immunity, and
              overall wellbeing naturally.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">Orange Peel Powder</h4>
            <p className="text-gray-700 mb-4">
              Packed with vitamin C and antioxidants, orange peel powder
              brightens the skin, promotes collagen production, and helps fight
              acne and pigmentation.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">Rose Petals Powder</h4>
            <p className="text-gray-700 mb-4">
              Valued for its soothing and hydrating properties, rose petals
              powder enhances skin glow, calms irritation, and adds a luxurious
              touch to beauty rituals.
            </p>
          </div>
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
