import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </p>

        {/* Middle Links */}
        <ul className="flex gap-4 text-sm">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>

        {/* Right Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
