import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="space logo" />
      <img src={menu} alt="hamburger menu" />
      <nav className="absolute h-screen w-[254px] top-0 bottom-0 right-0 bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[40.774227142333984px] pt-5 pr-[26px] gap-[65px] flex items-center flex-col ">
        <img className="self-end" src={close} alt="close icon" />
        <ul className="text-white flex flex-col gap-8">
          <li>
            <Link to="/" className="tracking-[2.7px]">
              <span className="pr-[11px] ">00</span>HOME
            </Link>
          </li>
          <li>
            <Link to="/destination" className="tracking-[2.7px]">
              <span className="pr-[11px] ">01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew" className="tracking-[2.7px]">
              <span className="pr-[11px] ">02</span>CREW
            </Link>
          </li>
          <li>
            <Link to="/technology" className="tracking-[2.7px]">
              <span className="pr-[11px] ">03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
