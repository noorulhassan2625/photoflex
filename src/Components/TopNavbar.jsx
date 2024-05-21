import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

function TopNavbar() {
  return (
    <>
      <div className="top-navbar flex w-full px-10 border-b-[1px] shadow-[0px_1px_2px_1px_rgba(245,204,245,1);] border-[#B7F1E1]">
        <div className="logoImg">
          <img src={logo} width={"100px"} alt="logo" />
        </div>
        <div className="navlist ml-auto mt-10">
          <nav>
            <ul className="navbar flex flex-wrap">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-5 text-white bg-[#6BB4B4] mt-4 px-4 py-2 rounded-[5px]"
                      : "mx-5 border-b-2 border-[#6BB4B4] text-white bg-[#075c5c] mt-4 px-4 py-2"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-5 text-white bg-[#6BB4B4] mt-4 px-4 py-2 rounded-[5px]"
                      : "mx-5 border-b-2 border-[#6BB4B4] text-white bg-[#075c5c] mt-4 px-4 py-2"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
