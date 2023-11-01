import Data from "./Data";
import launchVehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePort from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPortrait from "../assets/technology/image-spaceport-portraitnew.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portraitnew.jpg";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const images: { [key: string]: string } = {
  "Launch vehicle": launchVehicle,
  Spaceport: spacePort,
  "Space capsule": spaceCapsule,
};

const portraitImages: { [key: string]: string } = {
  "Launch vehicle": launchVehiclePortrait,
  Spaceport: spacePortPortrait,
  "Space capsule": spaceCapsulePortrait,
};

const Technology = () => {
  const [selectedTerminology, setSelectedTerminology] =
    useState("Launch vehicle");

  // Button map item titles
  const terminologies = ["Launch vehicle", "Spaceport", "Space capsule"];

  const handleTerminologyClick = (term: SetStateAction<string>) => {
    setSelectedTerminology(term);
  };

  return (
    <div className="mt-[34px] mb-6 lg:ml-[166px] lg:mt-[100px]">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="text-white md:ml-6 text-base md:text-xl lg:text-[28px] tracking-[2.7px]
        md:tracking-[3.8px] lg:tracking-[4.7px] uppercase md:justify-start justify-center flex flex-row gap-7 items-center"
        >
          <h6 className="font-bold opacity-25">03</h6>
          <h6>SPACE LAUNCH 101</h6>
        </div>
      </motion.div>
      {/* Information from Data (image, terminology, title, description) */}
      {Data.technology.map((item, index) => (
        <div
          key={index}
          className={`${
            selectedTerminology === item.name ? "" : "hidden"
          } mt-8 flex flex-col lg:flex-row-reverse w-full justify-between`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="lg:hidden"
          >
            <img
              src={images[item.name]}
              alt={`Image of ${item.name}`}
              className="w-full p-0 m-0"
              style={{ padding: 0, margin: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="hidden lg:flex">
              <img
                src={portraitImages[item.name]}
                alt={`Image of ${item.name}`}
                className="w-[515px] h-[527px]"
              />
            </div>
          </motion.div>
          {/* Choose terminology */}
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="flex flex-row lg:flex-col gap-4 mx-auto justify-center my-7 lg:mx-0 lg:gap-8 lg:pr-20">
              <motion.div
                className="flex flex-row gap-6 lg:flex-col"
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                {terminologies.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleTerminologyClick(term)}
                    className={`rounded-full hover:bg-white hover:text-black duration-500 w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] tracking-[1px] border border-white lg:text-[32px] lg:tracking-[2px]
                  ${
                    item.name === term
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }
                `}
                  >
                    {index + 1}
                  </button>
                ))}
              </motion.div>
            </div>
            {/* Text Contents */}
            <div className="flex flex-col mx-auto justify-center items-center text-center lg:mx-0 lg:mt-6 lg:text-left lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <h4 className="mb-[9px] text-veryLightBlue text-sm tracking-[2.3px] md:tracking-[2.7px]">
                  THE TERMINOLOGY…
                </h4>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <h1 className="text-2xl md:text-[40px] lg:text-[50px] uppercase mb-4 lg:my-5 text-white">
                  {item.name}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-veryLightBlue text-[15px] leading-[25px] md:leading-7 md:w-[428px]">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technology;
