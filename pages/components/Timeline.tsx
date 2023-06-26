import React, { useState } from "react";
import config from "../index.json";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  const timeline = config.timeline;
  const about = config.about;
  // const stops = config.timeline.milestones;

  const stops = timeline.milestones;
  const [currentStop, setCurrentStop] = useState(0);

  // const goToNextStop = () => {
  //   console.log("next stop entered");

  //   if (currentStop < stops.length - 1) {
  //     setCurrentStop(currentStop + 1);
  //   }
  // };


  // const goToPreviousStop = () => {
  //   console.log("previous stop entered");

  //   console.log(currentStop);
  //   if (currentStop > 0) {
  //     setCurrentStop(currentStop - 1);
  //     console.log(currentStop);
  //     console.log("stop number decremented");

  //   }
  //   console.log("after if log");
  //   console.log(currentStop);

  // };

  const goToNextStop = () => {
    console.log("Next stop clicked");
  };
  
  const goToPreviousStop = () => {
    console.log("Previous stop clicked");
  };
  

  return (
    
    <div id={timeline.title} className="px-8 sm:px-12 md:px-32 pb-32 flex justify-center align-center flex-col bg-gradient-to-r from-blue-700 via-blue-600 via blue-500 to-white">
      <h2 className="mt-12 uppercase font-bold text-center text-white text-bold text-4xl">{timeline.title}</h2>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image
            src={stops[currentStop].image}
            alt={stops[currentStop].title}
            className="shadow-lg"
            width={800}
            height={400}
          />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{stops[currentStop].title}</span>
          </div>
          <div className="mt-6">
            <span>{stops[currentStop].description}</span>
          </div>
        </div>
      </div>



      <div className="flex justify-center mt-8">
        <button
          className="text-white hover:text-blue-400 focus:text-blue-400 mr-4"
          onClick={goToPreviousStop}
          disabled={currentStop === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <button
          className="text-white hover:text-blue-400 focus:text-blue-400"
          onClick={() => goToNextStop()} 
          disabled={currentStop === stops.length - 1}
        >
          {/* <FontAwesomeIcon icon={faArrowRight} /> */}
          click here to swipe right
        </button>

        <div>
    </div>
        

        
      </div>
    </div>
  );
};

export default Timeline;
