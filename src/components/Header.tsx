import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img className="" src={logo} alt="space logo" />
      <img className="md:hidden" src={menu} alt="hamburger menu" />
      <nav
        className="absolute
       h-screen top-0 bottom-0
       right-0
       backdrop-blur-[40.774227142333984px]
       md:bg-[#151823] lg:bg-transparent
       pt-5 pr-[26px] gap-[65px] flex items-center
       flex-col md:static md:block md:h-auto md:p-0"
      >
        <img className="self-end md:hidden" src={close} alt="close icon" />
        <ul className="text-white flex flex-col gap-8 md:flex-row px-12 md:gap-9">
          <li className="md:py-10">
            <NavLink to="/" className="tracking-[2.7px] md:py-10">
              <span className="pr-[11px] md:hidden">00</span>HOME
            </NavLink>
          </li>
          <li className="md:py-10">
            <NavLink to="/destination" className="tracking-[2.7px] md:py-10">
              <span className="pr-[11px] md:hidden">01</span>DESTINATION
            </NavLink>
          </li>
          <li className="md:py-10">
            <NavLink to="/crew" className="tracking-[2.7px] md:py-10">
              <span className="pr-[11px] md:hidden">02</span>CREW
            </NavLink>
          </li>
          <li className="md:py-10">
            <NavLink to="/technology" className="tracking-[2.7px] md:py-10">
              <span className="pr-[11px] md:hidden">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;