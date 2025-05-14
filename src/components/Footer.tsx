import React from "react";
import Logo from "./Logo";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="z-50">
              <Logo className="h-12" />
            </div>
            <p className="text-gray-300 mb-4">
              Africa's premier platform for deep insights, live showcases, and
              high-value networking across the digital currency and stablecoin
              space.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.x.com/afristablecoin"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/afristablecoin"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/afristablecoin"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/afristablecoin"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              Event Info
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Date: November 7, 2025</li>
              <li className="text-gray-300">Time: 8:00am WAT</li>
              <li className="text-gray-300">
                Venue: Four Points by Sheraton Hotel
              </li>
              <li className="text-gray-300">Victoria Island, Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail
                  size={18}
                  className="flex-shrink-0 mt-1 text-secondary-400"
                />
                <a
                  href="mailto:nath@africastablecoin.org"
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  nath@africastablecoin.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="flex-shrink-0 mt-1 text-secondary-400"
                />
                <a
                  href="tel:+2349039830751"
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  +234 903 983 0751
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Africa Stablecoin Conference. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
