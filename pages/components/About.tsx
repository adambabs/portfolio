import React, { useState } from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  const submenuItems = [
    { title: "Timeline", link: "#" },
    { title: "Education", link: "#" },
    { title: "Experience", link: "#" },
  ];

  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <div
      id="About"
      className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-blue-700 via-blue-600 via blue-500 to-blue-100"

    >
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {about.title}
      </h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center relative">
          <div
            className={`image-wrapper shadow-lg ${
              isImageHovered ? "zoomed-image" : ""
            }`}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          >
            <Image
              src={about.image}
              alt="about"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <b><span>{about.primary}</span></b>
          </div>
          <div className="mt-6">
          <b><span>{about.secondary}</span></b>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a href={"#"} className="about__resume text-white text-l">
              View Resume
            </a>
          </div>
          {/* <div className="mt-6">
            <h2 className="text-white font-bold text-lg">Submenu</h2>
            <ul className="mt-2">
              {submenuItems.map((item, index) => (
                <li key={index} className="text-white">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
