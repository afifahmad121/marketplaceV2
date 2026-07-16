import logo from "../../assets/logo/logo.png";
import { Button } from "../shared/Button";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-navbar text-fontWhite border-b border-gray-600">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo marketplace"
          className="bg-white ml-10 mr-1"
        />
        <h3 className="font-bold text-lg leading-5.5 tracking-normal">
          DibiTech
        </h3>
      </div>

      <div className="flex gap-9">
        <ul className="hidden md:flex items-center gap-9 text-sm font-medium leading-5.5 tracking-normal">
          <li>
            <a href="#" className="hover:text-clickText">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-clickText">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-clickText">
              Cart
            </a>
          </li>
        </ul>
        <Button title="Login" to="/login" />
      </div>
    </nav>
  );
};
