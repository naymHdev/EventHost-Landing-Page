import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-800"
            >
              <li>
                <Link to="/">
                  <a href="/">Home</a>
                </Link>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-xl md:px-5 px-2">EventHost</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:px-5 px-2">
          <div className=" flex items-center justify-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div>
              <FaCartShopping className=" text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
