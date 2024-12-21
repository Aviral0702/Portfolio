import React from "react";
import logo from "../assets/Images/portfolio logo.png";
function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 px-4">
        <div className="flex justify-between items-center p-2">
          <img src={logo} alt="" height={70} width={70} />
          <ul className="flex justify-center space-x-8">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
