import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  Info,
  Database,
  Key,
  Lock,
  AlertCircle,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    dataCollection: false,
    dataUsage: false,
    dataSecurity: false,
    cookies: false,
    thirdParty: false,
    childPrivacy: false,
    rights: false,
    changes: false,
    contact: false,
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
          Privacy Policy
        </h1>
        <p className="text-gray-600">Last updated: May 1, 2025</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <div className="flex items-start">
          <Info className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
          <p className="text-blue-700">
            This Privacy Policy describes how we collect, use, and share your
            personal information when you visit or make a purchase from our
            website. Please read this policy carefully to understand our
            practices regarding your personal data.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("introduction")}
        >
          <div className="flex items-center">
            <ShieldCheck className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Introduction
            </h2>
          </div>
          {expandedSections.introduction ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.introduction && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy is
              designed in compliance with the Information Technology Act, 2000,
              and the Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules,
              2011.
            </p>
            <p className="text-gray-600">
              By using our website, you consent to the collection and use of
              your information as described in this Privacy Policy. If you do
              not agree with the terms of this policy, please do not use our
              website or services.
            </p>
          </div>
        )}
      </div>

      {/* Data Collection Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("dataCollection")}
        >
          <div className="flex items-center">
            <Database className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Information We Collect
            </h2>
          </div>
          {expandedSections.dataCollection ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.dataCollection && (
          <div className="mt-4 pl-9">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-2">
                Personal Information
              </h3>
              <p className="text-gray-600 mb-2">
                We collect the following personal information when you register,
                place an order, or interact with our website:
              </p>
              <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and shipping address</li>
                <li>
                  Payment information (we do not store complete credit card
                  details)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 mb-2">
                We also automatically collect certain information when you visit
                our website:
              </p>
              <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Location information</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Data Usage Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("dataUsage")}
        >
          <div className="flex items-center">
            <FileText className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              How We Use Your Information
            </h2>
          </div>
          {expandedSections.dataUsage ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.dataUsage && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We use the information we collect for various purposes, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">
                  Order Processing
                </h3>
                <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                  <li>Processing and fulfilling your orders</li>
                  <li>Communicating about your order status</li>
                  <li>Processing payments</li>
                  <li>Arranging for shipping</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">
                  Customer Service
                </h3>
                <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                  <li>Providing customer support</li>
                  <li>Responding to inquiries</li>
                  <li>Addressing complaints</li>
                  <li>Improving our services</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">Marketing</h3>
                <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                  <li>Sending promotional emails</li>
                  <li>Providing personalized recommendations</li>
                  <li>Conducting market research</li>
                  <li>Improving our marketing efforts</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-2">
                  Website Improvement
                </h3>
                <ul className="text-gray-600 space-y-1 ml-5 list-disc">
                  <li>Analyzing usage patterns</li>
                  <li>Testing new features</li>
                  <li>Preventing fraud and abuse</li>
                  <li>Ensuring website security</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data Security Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("dataSecurity")}
        >
          <div className="flex items-center">
            <Lock className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Data Security
            </h2>
          </div>
          {expandedSections.dataSecurity ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.dataSecurity && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>

            <ul className="text-gray-600 space-y-2 mb-4">
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Encryption:</span> All sensitive
                  data is encrypted using industry-standard SSL technology.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Secure Networks:</span> Our
                  systems are protected by firewalls and network access
                  controls.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Limited Access:</span> Only
                  authorized employees have access to personal information.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Regular Audits:</span> We
                  conduct regular security assessments to ensure data
                  protection.
                </div>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-start">
                <AlertCircle
                  className="text-yellow-500 mr-3 mt-1 flex-shrink-0"
                  size={16}
                />
                <p className="text-yellow-700">
                  While we strive to protect your personal information, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure. We cannot guarantee absolute security of your
                  data.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cookies Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("cookies")}
        >
          <div className="flex items-center">
            <Key className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Cookies and Tracking Technologies
            </h2>
          </div>
          {expandedSections.cookies ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.cookies && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to collect
              information about your browsing activities on our website. Cookies
              are small text files stored on your device that help us improve
              your experience.
            </p>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-medium text-gray-800 mb-2">
                Types of Cookies We Use:
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <div>
                    <span className="font-medium">Essential Cookies:</span>{" "}
                    Required for the website to function properly.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <div>
                    <span className="font-medium">Functional Cookies:</span>{" "}
                    Remember your preferences and settings.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <div>
                    <span className="font-medium">Analytical Cookies:</span>{" "}
                    Help us understand how visitors use our website.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <div>
                    <span className="font-medium">Marketing Cookies:</span> Used
                    to deliver relevant advertisements.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-600">
              You can set your browser to refuse cookies or alert you when
              cookies are being sent. However, some parts of our website may not
              function properly if you disable cookies.
            </p>
          </div>
        )}
      </div>

      {/* Third Party Disclosure Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("thirdParty")}
        >
          <div className="flex items-center">
            <Globe className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Third-Party Disclosure
            </h2>
          </div>
          {expandedSections.thirdParty ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.thirdParty && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We may share your personal information with the following third
              parties:
            </p>

            <ul className="text-gray-600 space-y-2 mb-4">
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Service Providers:</span>{" "}
                  Companies that help us operate our website and provide
                  services (payment processors, shipping companies, etc.).
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Analytics Partners:</span>{" "}
                  Companies that help us analyze website traffic and usage.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Marketing Partners:</span>{" "}
                  Companies that help us with marketing and advertising efforts.
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">•</div>
                <div>
                  <span className="font-medium">Legal Requirements:</span> We
                  may disclose information when required by law or to protect
                  our rights or the safety of others.
                </div>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded">
              <p className="text-blue-700">
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with applicable
                laws. We do not allow our third-party service providers to use
                your personal data for their own purposes.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Children's Privacy Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("childPrivacy")}
        >
          <div className="flex items-center">
            <AlertCircle className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Children's Privacy
            </h2>
          </div>
          {expandedSections.childPrivacy ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.childPrivacy && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              Our website is not intended for children under 18 years of age. We
              do not knowingly collect personal information from children. If
              you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us
              immediately.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-red-700">
                If we become aware that we have collected personal information
                from children without verification of parental consent, we will
                take steps to remove that information from our servers.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Your Rights Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("rights")}
        >
          <div className="flex items-center">
            <ShieldCheck className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
          </div>
          {expandedSections.rights ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.rights && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              Under Indian data protection laws, you have certain rights
              regarding your personal information:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      <span className="font-medium">Right to Access:</span> You
                      can request information about the personal data we hold
                      about you.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      <span className="font-medium">Right to Correction:</span>
                      You can request that we correct inaccurate information.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      <span className="font-medium">Right to Deletion:</span>
                      You can request that we delete your personal information.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <div>
                      <span className="font-medium">Right to Object:</span> You
                      can object to certain processing of your data.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600">
              To exercise any of these rights, please contact us using the
              information provided in the "Contact Us" section. We will respond
              to your request within 30 days.
            </p>
          </div>
        )}
      </div>

      {/* Changes to Policy Section */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("changes")}
        >
          <div className="flex items-center">
            <FileText className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">
              Changes to This Policy
            </h2>
          </div>
          {expandedSections.changes ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.changes && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. The updated version will be indicated by an
              updated "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-gray-600">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we are protecting your information. Your
              continued use of our website after any changes to this Privacy
              Policy constitutes your acceptance of the changes.
            </p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div>
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => toggleSection("contact")}
        >
          <div className="flex items-center">
            <Phone className="text-gray-700 mr-3" size={20} />
            <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          </div>
          {expandedSections.contact ? (
            <ChevronUp className="text-gray-500" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </button>

        {expandedSections.contact && (
          <div className="mt-4 pl-9">
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <Mail className="text-gray-700 mr-3" size={16} />
                  <span>Email: rahulkumawat50665@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-gray-700 mr-3" size={16} />
                  <span>Phone: +91 6377408633 (Mon-Sat, 10AM-7PM IST)</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <FileText className="text-gray-700" size={16} />
                  </div>
                  <div className="ml-3">
                    <span>Postal Address:</span>
                    <p className="mt-1">
                      Privacy Team
                      <br />
                     VEBORG ORGANICS
                      <br />
                      Khatu shyam ji, sikar 
                      <br />
                      sikar - 332602
                      <br />
                      Rajasthan, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-600">
              We will address your concerns and respond to your inquiries as
              soon as possible.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          This Privacy Policy is designed to be compliant with Indian laws and
          regulations, including the Information Technology Act, 2000, and
          relevant rules. By using our website, you acknowledge that you have
          read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
