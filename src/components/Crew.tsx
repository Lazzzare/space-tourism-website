import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import Data from "./Data";
import { useState } from "react";

const images: { [key: string]: string } = {
  Douglas: douglas,
  Mark: mark,
  Victor: victor,
  Anousheh: anousheh,
};

const Crew = () => {
  const [change, setChange] = useState<number | null>(0);

  const handleChange = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (e.target instanceof SVGElement) {
      const state = e.target.getAttribute("data-state");
      if (e.target.tagName === "circle") {
        state && setChange(parseFloat(state));
      }
    }
  };

  return (
    <div className="text-white text-center md:px-6 lg:text-left max-w-7xl mx-auto">
      <h5
        className="before:content-['02'] before:text-white before:mr-3 uppercase before:tracking-[2.7px] tracking-[2.7px] before:opacity-25
      mt-6 md:mt-10 before:font-bold md:text-xl md:text-left lg:text-[28px] lg:tracking-[4.725px] lg:before:tracking-[4.725px] lg:before:mr-6 lg:mt-[76px]"
      >
        Meet your crew
      </h5>
      {Data.crew.map(
        (crews, index) =>
          index === change && (
            <div
              className="flex flex-col justify-center lg:flex-row md:mt-[60px] lg:m-0 lg:items-center lg:justify-between"
              key={index}
            >
              <div className="flex flex-col gap-1 lg:mt-28">
                <h6 className="uppercase opacity-[0.4951] mb-2 md:text-2xl lg:text-[32px] lg:mb-4">
                  {crews.role}
                </h6>
                <h4 className="uppercase text-2xl mb-4 md:text-[40px] lg:text-[56px] leading-[64.18px] lg:mb-7">
                  {crews.name}
                </h4>
                <p className="text-veryLightBlue text-[15px] leading-[25px] max-w-[458px] mx-auto md:text-base md:leading-7 lg:m-0 lg:text-lg">
                  {crews.bio}
                </p>
                <svg
                  onClick={(e) => handleChange(e)}
                  className="mx-auto mb-8 order-[-1] md:order-1 md:my-10 lg:m-0 lg:mt-[120px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="10"
                  viewBox="0 0 88 10"
                  fill="none"
                >
                  <circle
                    opacity={`${change !== 0 && "0.174363"}`}
                    cx="5"
                    cy="5"
                    r="5"
                    fill="white"
                    data-state="0"
                  />
                  <circle
                    opacity={`${change !== 1 && "0.174363"}`}
                    cx="31"
                    cy="5"
                    r="5"
                    fill="white"
                    data-state="1"
                  />
                  <circle
                    opacity={`${change !== 2 && "0.174363"}`}
                    cx="57"
                    cy="5"
                    r="5"
                    fill="white"
                    data-state="2"
                  />
                  <circle
                    opacity={`${change !== 3 && "0.174363"}`}
                    cx="83"
                    cy="5"
                    r="5"
                    fill="white"
                    data-state="3"
                  />
                </svg>
              </div>
              <div className="my-8 order-[-2] md:order-2 md:m-0">
                <img
                  src={images[crews.name.split(" ")[0]]}
                  alt="douglas"
                  className="max-w-[177.123px] inline-block md:max-w-[456.372px] lg:max-w-[568.072px]"
                />
                <hr className="border-0 h-[1px] bg-[#383B4B] md:hidden" />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Crew;
