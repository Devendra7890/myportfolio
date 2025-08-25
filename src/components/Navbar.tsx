// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
//       <h1 className="text-xl font-bold">Devendra Malviya</h1>
//       <div className="space-x-6">
//         <Link to="/">Home</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/resume">Resume</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "relative px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition";
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `${linkClass} ${isActive ? "bg-white/15 ring-1 ring-white/20" : ""}`;

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg md:text-xl font-extrabold tracking-wide">
          Devendra Malviya
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={activeClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <FiMenu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-3 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={activeClass}
              onClick={() => setIsOpen(false)} // menu close on click
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
