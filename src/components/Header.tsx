import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import navItems from "./navItems";

const Header = ({ width }: { width: boolean }) => {
  const [mobile, setMobile] = useState(false);

  const handleHide = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLAnchorElement && e.target.tagName === "A") {
      setMobile(false);
    }
  };

  return (
    <header className="flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img className="md:pl-6 lg:pl-40" src={logo} alt="space logo" />
      </motion.div>
      {mobile ? (
        <img
          className="md:hidden z-40 cursor-pointer"
          src={close}
          alt="close icon"
          onClick={() => setMobile(false)}
        />
      ) : (
        <img
          className="md:hidden z-40 cursor-pointer"
          src={menu}
          alt="hamburger menu"
          onClick={() => setMobile(true)}
        />
      )}
      {(mobile || width) && (
        <nav
          className="absolute
       h-full top-0 bottom-0
       right-0
       backdrop-blur-[40.774227142333984px]
       md:bg-[#151823] lg:bg-transparent
       pt-5 gap-[65px] flex items-center
       flex-col md:static md:block md:h-auto md:px-12 md:pt-0 z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ul
              className="text-white flex flex-col gap-8 md:flex-row md:gap-9 pt-32 md:pt-0"
              onClick={(e) => handleHide(e)}
            >
              {navItems.map((item, index) => (
                <li key={index} className="pl-8 md:pl-0">
                  <NavLink
                    to={item.to}
                    state={item.state}
                    className="tracking-[2.7px] w-full block md:pr-0 md:py-10 pr-[95px]"
                  >
                    <span className="pr-[11px] md:hidden">
                      {index.toString().padStart(2, "0")}
                    </span>
                    {item.state.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </nav>
      )}
    </header>
  );
};

export default Header;
