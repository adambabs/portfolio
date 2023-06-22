import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="scroll-to-top"
      onClick={handleScrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ScrollToTopButton;
