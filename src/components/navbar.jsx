import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1F1F1F] text-[#E0F7D1] fixed top-0 left-0 w-full z-40 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2">
        
        {/* Brand */}
        <div className="text-2xl font-bold text-green-400 animate-pulse tracking-wide">
          <Link to="/">ShareCircle</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-[#B6F09C] transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/donate" className="hover:text-[#B6F09C] transition-colors duration-200">Donate</Link>
          </li>
          <li>
            <Link to="/items" className="hover:text-[#B6F09C] transition-colors duration-200">Items</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#B6F09C] transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-[#B6F09C] transition-colors duration-200">Cart</Link>
          </li>
           <li>
            <Link to="/orders" className="hover:text-[#B6F09C] transition-colors duration-200">Orders</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-green-400 text-lg font-semibold animate-pulse hover:text-[#B6F09C] transition-colors duration-200"
            >
              Login / Sign In
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-[#E0F7D1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1F1F1F] w-full px-8 pt-4 pb-6 space-y-4 font-medium text-[#E0F7D1]">
          <Link to="/" className="block hover:text-[#B6F09C]" onClick={toggleMenu}>Home</Link>
          <Link to="/donate" className="block hover:text-[#B6F09C]" onClick={toggleMenu}>Donate</Link>
          <Link to="/items" className="block hover:text-[#B6F09C]" onClick={toggleMenu}>Items</Link>
          <Link to="/about" className="block hover:text-[#B6F09C]" onClick={toggleMenu}>About</Link>
          <Link
            to="/login"
            className="block text-green-400 text-lg font-semibold animate-pulse hover:text-[#B6F09C]"
            onClick={toggleMenu}
          >
            Login / Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
