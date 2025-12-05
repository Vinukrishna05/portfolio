import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          VK<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-cyan-400 duration-300">
              <ScrollLink 
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-start px-5 gap-6 py-6 text-lg">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-cyan-400 duration-300">
              <ScrollLink
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
