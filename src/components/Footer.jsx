import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-3 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://www.instagram.com/vinu_k._?igsh=MWl1M2F6eWE3cjUzZA==" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/vinu-krishnan/" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="https://github.com/Vinukrishna05" target="_blank" className="hover:text-gray-400"><FaGithub /></a>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Designed & Built by <span className="text-blue-400 font-semibold">Vinukrishnan</span>
        </p>
      </div>


    </footer>
  );
}
