import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [stopBouncing, setStopBouncing] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      setIsScrolling(true);
      setStopBouncing(false);

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        setStopBouncing(true);
      }, 800); // Adjust the debounce time (in milliseconds) to control when the bouncing stops

      const scrollPosition = window.pageYOffset;
      setShowButton(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const handleScrollToTop = () => {
    console.log("this works");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonClassName = showButton && (isScrolling || !stopBouncing) ? "scroll-to-top jump" : "scroll-to-top";

  return (
    <div className={buttonClassName} onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ScrollToTopButton;