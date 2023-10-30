import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="flex justify-between items-center">
      <img className="" src={logo} alt="space logo" />
      <img
        className="md:hidden"
        src={menu}
        alt="hamburger menu"
        onClick={() => setMobile(true)}
      />
      {mobile && (
        <nav
          className="absolute
       h-full top-0 bottom-0
       right-0
       backdrop-blur-[40.774227142333984px]
       md:bg-[#151823] lg:bg-transparent
       pt-5 gap-[65px] flex items-center
       flex-col md:static md:block md:h-auto md:px-12 md:pt-0 z-10"
        >
          <img
            className="self-end md:hidden pr-[26.5px]"
            src={close}
            alt="close icon"
            onClick={() => setMobile(false)}
          />
          <ul className="text-white flex flex-col gap-8 md:flex-row md:gap-9">
            <li className="pl-8 md:pl-0">
              <NavLink
                to="/"
                state="home"
                className="tracking-[2.7px] md:pr-0 md:py-10 w-full block"
              >
                <span className="pr-[11px] md:hidden">00</span>HOME
              </NavLink>
            </li>
            <li className="pl-8 md:pl-0">
              <NavLink
                to="/destination"
                state="destination"
                className="tracking-[2.7px] pr-[95px] w-full block md:pr-0 md:py-10"
              >
                <span className="pr-[11px] md:hidden">01</span>DESTINATION
              </NavLink>
            </li>
            <li className="pl-8 md:pl-0">
              <NavLink
                to="/crew"
                state="crew"
                className="tracking-[2.7px] w-full block md:pr-0 md:py-10"
              >
                <span className="pr-[11px] md:hidden">02</span>CREW
              </NavLink>
            </li>
            <li className="pl-8 md:pl-0">
              <NavLink
                to="/technology"
                state="technology"
                className="tracking-[2.7px] w-full block md:pr-0 md:py-10"
              >
                <span className="pr-[11px] md:hidden">03</span>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
