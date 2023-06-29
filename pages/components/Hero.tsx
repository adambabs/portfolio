import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide">
          Hi, my name is  
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-indigo-900 via-indigo-600 to-white bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-indigo-900 via-indigo-600 to-white-100">
          <div className="bg-white">
            <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-indigo-900 via-indigo-600 to-white-100 bg-clip-text text-transparent">
              Know more
            </span>
          </div>
        </a>
        {/* <div className="flex justify-start mt- ml-">
          <a href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noreferrer">
            <img src="/img/linkedinlogo.png" alt="LinkedIn Logo" className="w-6 h-6 inline-block" />
          </a>
        </div> */}
        <div className="flex justify-center">
          <a href="https://portfolio-adambabs.vercel.app/" target="_blank" rel="noreferrer">
            <img src="/img/me.jpg" alt="Profile Photo" className="mt-8 rounded-full w-80 h-80 object-cover" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

