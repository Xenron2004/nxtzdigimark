

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../public/assets/nxtzen_logo.svg";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset; // Get current scroll position

      // Hide navbar when scrolling down, show it when scrolling up
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsNavbarVisible(false); // Scroll down
      } else {
        setIsNavbarVisible(true); // Scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className=" w-full flex items-center  justify-center">
      <div
        className={`w-full bg-white  border-b-2 border-b-[#DFDFDF] flex  h-[90px] items-center justify-center px-4 sm:px-6 lg:px-8 fixed top-0   z-50 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0  " : "-translate-y-[90px]"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              width={120}
              height={100}
              alt="Nxtzengroup Logo"
            />
          </Link>

          {/* Links for large screens */}
          <div className="hidden lg:flex text-headingText items-center justify-between gap-5">
            <Link
              href="/"
              className="font-medium font-montserrat transition hover:text-primary duration-300 ease-in-out text-headingText text-base leading-tight"
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                className="flex items-center font-montserrat font-medium  gap-2 text-gray-800 hover:text-primary transition"
              >
                <Link href="/products">Products</Link>{" "}
                <FaChevronDown
                  size={12}
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${
                  isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Link
                  href="/aluminium-doors"
                  className="block px-4 py-2 font-montserrat hover:bg-gray-100"
                >
                  Aluminium Doors
                </Link>
                <Link
                  href="/Aluminium-windows"
                  className="block px-4 py-2 font-montserrat hover:bg-gray-100"
                >
                  Aluminium Windows
                </Link>
                <Link
                  href="/facades"
                  className="block px-4 py-2 font-montserrat hover:bg-gray-100"
                >
                  Facades
                </Link>
                <Link
                  href="/entrance-doors"
                  className="block px-4 py-2 font-montserrat hover:bg-gray-100"
                >
                  Entrance Doors
                </Link>
                <Link
                  href="/interior"
                  className="block px-4 py-2 font-montserrat hover:bg-gray-100"
                >
                  Internal Partitions
                </Link>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="font-medium transition hover:text-primary duration-300 ease-in-out font-montserrat text-headingText text-base leading-tight"
            >
              Portfolio
            </Link>
            <Link
              href="/gallery"
              className="font-medium font-montserrat transition hover:text-primary duration-300 ease-in-out text-headingText text-base leading-tight"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="font-medium transition hover:text-primary duration-300 ease-in-out font-montserrat text-headingText text-base leading-tight"
            >
              About
            </Link>
          </div>

          {/* Buttons for large screens */}
          <div className="hidden lg:flex items-center justify-between gap-4">
          <motion.div
          
            className="relative group w-full md:max-w-fit"
          >
            <Link href="/contact">
              <button className=" px-5 py-3 w-full bg-primary text-white shadow relative overflow-hidden">
                <span className="relative uppercase font-montserrat text-[16px] tracking-[2%] text-white z-10">
                  Contact Us
                </span>
                <span className="absolute inset-0 bg-secondary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>
            </Link>
          </motion.div>
          </div>

          <div className="lg:hidden flex  justify-between items-center">
            <button onClick={toggleMenu} className="text-headingText">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-white  flex-col items-start justify-start gap-8  transition-all h-screen ease-in-out duration-500`}
        >
          {/* Logo and Close Button */}
          <div className=" flex absolute w-full top-0 p-6 justify-between items-center">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  width={100}
                  height={80}
                  alt="Nxtzengroup Logo"
                />
              </Link>
            </div>
            <div>
              <button onClick={toggleMenu} className="text-headingText">
                <IoCloseSharp size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="flex items-start p-6 top-[100px] flex-col w-full h-auto gap-6 justify-start relative "
            onClick={toggleMenu}
          >
            <div>
              <Link
                href="/"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Home
              </Link>
            </div>
           
            <div>
              <Link
                href="/products"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Products
              </Link>
            </div>
            
            <div>
              <Link
                href="/portfolio"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Portfolio
              </Link>
            </div>
            <div>
              <Link
                href="/gallery"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                Gallery
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className="text-headingText font-montserrat font-medium text-[17px]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col w-full p-6  gap-4 justify-center items-start relative mt-[56px]">
            <button
              onClick={() => {
                window.location.href = "/contact"; // Replace with your desired path
              }}
              className="md:max-w-[216px] uppercase font-montserrat h-[45px] bg-primary font-medium flex items-center justify-center text-white w-full py-6 px-6"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
