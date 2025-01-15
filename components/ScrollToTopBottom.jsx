"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopBottom() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-10 bg-primary cursor-pointer text-white p-3 shadow-lg transition-opacity duration-300  hover:opacity-100"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 transform rotate-0" // Rotate it to point upwards
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L6.707 8.707A1 1 0 115.293 7.293l4-4A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    )
  );
}
