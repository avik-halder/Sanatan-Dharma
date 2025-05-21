import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import logo3 from "../assets/logo.webp";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoContainerRef = useRef(null);

  useEffect(() => {
    if (!isHomePage) return; // only apply scroll logic on Home page

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) return; // only run animation on Home page

    const handlePosition = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const logoContainer = logoContainerRef.current;

      if (isScrolled && logoContainer) {
        // Get the position of the container for the logo to move to
        const rect = logoContainer.getBoundingClientRect();
        const containerCenterX = rect.left + rect.width / 2;
        const containerCenterY = rect.top + rect.height / 2;

        // Calculate position relative to viewport
        const viewportX = containerCenterX;
        const viewportY = containerCenterY;

        controls.start({
          top: viewportY,
          left: viewportX,
          scale: isMobile ? 1.4 : 0.9,
          x: "-50%",
          y: "-50%",
          transition: { type: "spring", stiffness: 80, damping: 16 },
        });
      } else {
        controls.start({
          top: isMobile ? "25%" : "20%",
          left: "50%",
          scale: isMobile ? 5 : 3.5,
          x: "-50%",
          y: "-50%",
          transition: { type: "spring", stiffness: 60, damping: 16 },
        });
      }
    };

    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, [isScrolled, isHomePage, controls]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Deities", href: "/deities" },
    { label: "Practices", href: "/practices" },
    { label: "Festivals", href: "/festivals" },
    { label: "Temples", href: "/temples" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <>
      {/* Animated Floating Logo - Only for Home */}
      {isHomePage && (
        <motion.div
          className={`fixed ${isMenuOpen ? "z-10" : "z-[60]"}`}
          initial={{ top: "0%", left: "50%", x: "-50%", y: "-50%", scale: 1.5 }}
          animate={controls}
        >
          <img
            loading="lazy"
            src={logo3}
            alt="Logo"
            className="h-7 w-7 md:w-9 md:h-9 lg:h-11 lg:w-11 rounded-full"
          />
        </motion.div>
      )}

      {/* Navbar Structure */}
      <div
        className={`fixed z-50 mx-auto lg:left-8 lg:right-8 left-0 right-0 top-2 w-[95%] lg:max-w-[84%] ${
          isScrolled || isMenuOpen || !isHomePage
            ? "bg-[#fff0d5e0] shadow-md border border-gray-300 rounded-2xl"
            : ""
        }`}
      >
        <nav className="px-4 py-2 sm:px-6 sm:py-3 flex justify-between items-center">
          {/* Left Side: Logo and Title */}
          <div className="flex items-center space-x-3">
            {(!isHomePage || isMenuOpen) && (
              <>
                <a href="/">
                  <img
                    loading="lazy"
                    src={logo3}
                    alt="Logo"
                    className="h-9 w-9 rounded-full"
                  />
                </a>
                <a
                  href="/"
                  className="text-[25px] sm:text-4xl font-extrabold font-underdog text-[#CE6400]"
                >
                  Sanatan Dharma
                </a>
              </>
            )}

            {isHomePage && isScrolled && !isMenuOpen && (
              <>
                <div
                  id="logo-container"
                  ref={logoContainerRef}
                  className="h-9 w-9 rounded-full"
                />
                <span className="text-[25px] md:text-3xl lg:text-4xl font-extrabold font-underdog text-[#CE6400]">
                  Sanatan Dharma
                </span>
              </>
            )}
          </div>

          {/* Desktop Menu */}
          {(isScrolled || !isHomePage) && (
            <div className="lg:flex space-x-6 hidden">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[18px] font-semibold text-[#CE6400] hover:text-orange-500 hover:underline mt-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="px-3 py-1 rounded-xl border-2 border-orange-700 text-[18px] font-semibold text-orange-700 bg-orange-200 hover:text-orange-100 hover:bg-[#CE6400] hover:border-transparent"
              >
                Contact
              </a>
            </div>
          )}

          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color="#CE6400"
              size={25}
              duration={0.5}
              distance="sm"
              easing="ease-in-out"
            />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-orange-50 z-40 pt-20">
          <div className="h-full flex flex-col">
            <div className="flex-grow px-6 overflow-y-auto">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center space-x-3 py-5 text-amber-700 border-b-2 border-dashed border-orange-300"
                >
                  <span className="text-2xl font-medium">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="px-6 py-8 border-t border-gray-200">
              <span className="flex justify-center mb-1 text-gray-600">
                Want to connect with us?
              </span>
              <a
                href="/contact"
                className="block w-full rounded-md bg-amber-600 px-4 py-3 text-center text-2xl font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
