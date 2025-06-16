import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <span
      onClick={scrollToTop}
      className={`z-50 animate__animated animate__bounce fixed bottom-4 right-4 cursor-pointer  bg-blue-700 text-white p-2 w-10 h-10 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <BiArrowToTop className="font-extrabold text-2xl"/>
    </span>
  );
};

export default ScrollToTopButton;
