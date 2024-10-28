import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollLength, setScrollLength] = useState(0);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollLength(scrollY);
      setIsVisible(scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-2 z-20">
          <button
            onClick={scrollToTop}
            className="p-3 bg-transparent text-primary border-2  rounded-full border-primary  transition duration-300 ease-in-out"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
