import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-white text-center md:pb-10 lg:flex lg:justify-between lg:items-end lg:text-left lg:pt-64 lg:pb-0 lg:px-40">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5 className="pt-12 tracking-[2.7px] md:text-xl md:pt-[106px] md:tracking-[3.375px] lg:tracking-[4.725px] lg:text-[28px] lg:p-0">
            SO, YOU WANT TO TRAVEL TO
          </h5>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="py-4 text-[80px] md:text-[150px]">SPACE</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="mb-20 text-[15px] leading-[25px] max-w-[444px] mx-auto md:text-base md:leading-7 md:mb-40 lg:text-lg lg:leading-8 lg:m-0">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <button className="lg:p-[88px] rounded-full hover:bg-white hover:bg-opacity-[0.1036] transition duration-1000 ease-in-out lg:mb-[-70px]">
          <Link
            to="/destination"
            state="destination"
            className="text-xl tracking-[1.25px] pt-[68px] pb-[59px] pl-[29.5px] pr-[27.5px] bg-white
          text-black rounded-full md:text-[32px] md:py-[102px] md:pl-[46px] md:pr-12 inline-block"
          >
            EXPLORE
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
