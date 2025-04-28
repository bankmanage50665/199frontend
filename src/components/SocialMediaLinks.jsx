import { Facebook, Instagram, Twitter } from "lucide-react";

export default function SocialMediaLinks() {
  return (
    <div className="mt-8 flex space-x-6">
      <a
        href="https://facebook.com"
        className="text-emerald-700 hover:text-emerald-900 transition-all duration-300"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com"
        className="text-emerald-700 hover:text-emerald-900 transition-all duration-300"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com"
        className="text-emerald-700 hover:text-emerald-900 transition-all duration-300"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
}
