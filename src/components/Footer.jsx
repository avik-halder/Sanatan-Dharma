import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-orange-100 py-12 pb-8">
      <div className="w-full px-4 lg:px-32 3xl:px-40">
        {/* Main footer grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Column 1: SanatanaDharma Info */}
          <div>
            <h3 className="font-bold text-2xl lg:text-2xl mb-4">
              SanatanaDharma
            </h3>
            <p className="text-orange-200 mb-4 text-sm lg:text-base">
              Exploring the timeless wisdom and traditions of Hinduism
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="/"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="/"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="/"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <span className="sr-only">X</span>
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-orange-100 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-xl lg:text-xl">Quick Links</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Hinduism
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-white transition-colors"
                >
                  Sacred Texts
                </a>
              </li>
              <li>
                <a
                  href="/deities"
                  className="hover:text-white transition-colors"
                >
                  Deities
                </a>
              </li>
              <li>
                <a
                  href="/festivals"
                  className="hover:text-white transition-colors"
                >
                  Festivals
                </a>
              </li>
              <li>
                <a
                  href="/temples"
                  className="hover:text-white transition-colors"
                >
                  Temples
                </a>
              </li>
              <li>
                <a
                  href="/practices"
                  className="hover:text-white transition-colors"
                >
                  Practices
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold mb-4 text-xl lg:text-xl">Resources</h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>
                <a
                  href="/resources"
                  className="hover:text-white transition-colors"
                >
                  Online Courses
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-white transition-colors"
                >
                  E-Books
                </a>
              </li>
              <li>
                <a
                  href="/practices"
                  className="hover:text-white transition-colors"
                >
                  Guided Meditations
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Community Forums
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-bold mb-4 text-xl">Contact Us</h3>
            <address className="not-italic text-sm lg:text-base space-y-4 flex flex-col items-center sm:items-start">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="inline h-5 w-5 text-orange-200" />
                Faridpur Sadar, Faridpur, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="inline h-5 w-5 text-orange-200" />
                <Link
                  to={"mailto:sanatandharma.info.contact@gmail.com"}
                  className="text-sm"
                >
                  sanatandharma.info.contact@gmail.com
                </Link>
                {/* <span className="text-sm">
                  sanatandharma.info.contact@gmail.com
                </span> */}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="inline h-5 w-5 text-orange-200" />
                +880 1798709761
              </p>
            </address>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2025{" "}
            <Link
              to={"https://avik-halder.vercel.app/"}
              className="underline font-medium"
            >
              Avik Halder
            </Link>
            . Made with 🤍 for all.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
