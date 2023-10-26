import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="space logo" />
      <img src={menu} alt="hamburger menu" />
    </header>
  );
};

export default Header;
