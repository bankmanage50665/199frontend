import { Leaf, Sparkles, HeartPulse } from "lucide-react";

export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {/* Benefit 1 */}
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="flex flex-col h-full">
          <div className="bg-emerald-700 flex items-center justify-center p-6">
            <Leaf size={64} className="text-white" />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-medium text-emerald-800 mb-3">
              Skin Purification
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              With powerful antibacterial and anti-inflammatory properties, our
              neem powder creates a natural clarifying effect on skin, reducing
              acne and evening skin tone.
            </p>
          </div>
        </div>
      </div>

      {/* Benefit 2 */}
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="flex flex-col h-full">
          <div className="bg-emerald-700 flex items-center justify-center p-6">
            <Sparkles size={64} className="text-white" />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-medium text-emerald-800 mb-3">
              Hair Restoration
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Rich in antioxidants and fatty acids, neem powder strengthens hair
              follicles, promotes growth, and naturally conditions while
              fighting dandruff and scalp conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Benefit 3 */}
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="flex flex-col h-full">
          <div className="bg-emerald-700 flex items-center justify-center p-6">
            <HeartPulse size={64} className="text-white" />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-medium text-emerald-800 mb-3">
              Holistic Wellness
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Traditionally used in Ayurveda for centuries, our premium neem
              powder supports immune function, digestive health, and helps
              maintain balanced blood sugar levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
