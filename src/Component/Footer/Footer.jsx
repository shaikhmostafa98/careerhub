import {
  FaSquareFacebook,
  FaSquareYoutube,
  FaSquareTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex text-white justify-around  py-16 bg-base-100 ">
      <div>
        <button>
          <NavLink
            className="px-4 py-2 bg-slate-900 font-bold text-2xl rounded-lg hover:bg-[#191e24] "
            to="/"
          >
            Career Hub
          </NavLink>
        </button>
      </div>
      <div>
        <p className="text-2xl">
          &copy; By{" "}
          <NavLink className="font-bold underline text-red-500">
            Career Hub
          </NavLink>{" "}
          || Sigma Town-2024.
        </p>
      </div>
      <div className="flex gap-2 font-bold text-4xl">
        <NavLink to="/">
          {" "}
          <FaSquareFacebook />
        </NavLink>
        <NavLink to="/">
          {" "}
          <FaSquareTwitter />
        </NavLink>
        <NavLink to="/">
          {" "}
          <FaLinkedin />
        </NavLink>
        <NavLink to="/">
          {" "}
          <FaSquareYoutube />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
