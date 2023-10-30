import Data from "./Data";
import moonPng from "./../assets/destination/image-moon.png";
import marsPng from "./../assets/destination/image-mars.png";
import europaPng from "./../assets/destination/image-europa.png";
import titanPng from "./../assets/destination/image-titan.png";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

const images: { [key: string]: string } = {
  Moon: moonPng,
  Mars: marsPng,
  Europa: europaPng,
  Titan: titanPng,
};

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  return (
    <div className="mt-[34px] md:mt-10 lg:mt-24 text-center">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="text-white lg:ml-[200px] md:ml-6 text-base md:text-xl lg:text-[28px] tracking-[2.7px]
        md:tracking-[3.8px] lg:tracking-[4.7px] uppercase md:justify-start justify-center flex flex-row gap-7 items-center"
        >
          <h5 className="font-bold opacity-25">01</h5>
          <h5 className="">Pick your destination</h5>
        </div>
      </motion.div>
      {/*  */}
      <div className="lg:w-full lg:flex lg:flex-row lg:items-center lg:mt-20 lg:mx-auto lg:justify-center">
        <div className="mt-10 lg:w-1/2">
          {Data.destinations.map((destination, index) => (
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div
                key={index}
                className={`m-4 ${
                  selectedDestination === destination.name ? "" : "hidden"
                }`}
              >
                <motion.img
                  src={images[destination.name]}
                  alt={`Image of ${destination.name}`}
                  className="w-[270px] md:w-[340px] lg:min-w-[500px] mx-auto lg:mx-0 rotating-image"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {/*  */}
        <div className="">
          <div className="flex justify-center lg:justify-normal mt-6">
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <ul className="flex flex-row gap-6 md:gap-9 mb-8">
                {Data.destinations.map((destination, index) => (
                  <h5
                    key={index}
                    onClick={() => setSelectedDestination(destination.name)}
                    className={`text-white uppercase text-sm md:text-base tracking-[2.3px] lg:tracking-[2.7px] cursor-pointer
                  hover:border-b-2 hover:border-white
              hover:pb-2 ${
                destination.name === selectedDestination
                  ? "border-b-2 border-white pb-2"
                  : ""
              }`}
                  >
                    {destination.name}
                  </h5>
                ))}
              </ul>
            </motion.div>
          </div>
          {/*  */}
          <div>
            {Data.destinations.map((destination, index) => (
              <Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  {destination.name === selectedDestination ? (
                    <>
                      <h1 className="text-white text-[56px] md:text-[80px] lg:text-left lg:text-[100px] uppercase">
                        {destination.name}
                      </h1>
                      <p className="text-veryLightBlue text-[15px] md:text-base md:w-[573px] lg:w-[444px] lg:h-[128px] md:mx-auto lg:mx-0 lg:text-left leading-[25px] md:leading-[28px]">
                        {destination.description}
                      </p>
                      {/* Line */}
                      <div className="my-8 bg-[#383B4B] h-[1px] md:w-[573px] lg:w-[444px] md:mx-auto lg:mx-0"></div>
                      {/* Distance/TravelTime */}
                      <div className="flex flex-col md:flex-row md:mx-auto items-center lg:mx-0 lg:justify-start md:justify-center md:gap-24 gap-8 pb-14">
                        <div className="flex gap-3 flex-col items-start">
                          <h5 className="text-veryLightBlue text-sm tracking-[2.3px] uppercase">
                            AVG. DISTANCE
                          </h5>
                          <h1 className="text-[28px] uppercase text-white">
                            {destination.distance}
                          </h1>
                        </div>
                        <div className="flex gap-3 flex-col items-start">
                          <h5 className="text-veryLightBlue text-sm tracking-[2.3px] uppercase">
                            Est. travel time
                          </h5>
                          <h1 className="text-[28px] uppercase text-white">
                            {destination.travel}
                          </h1>
                        </div>
                      </div>
                    </>
                  ) : null}
                </motion.div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
