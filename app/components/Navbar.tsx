"use client";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white w-full shadow-md fixed z-20 ">
        <div className="flex justify-between items-center lg:px-20 px-8 gap-5">
          <div className="flex text-white gap-2 font-bold py-4">
            <img
              className="w-[72px] h-[37px]"
              src="/Logo LKG Only 1.png"
              width={100}
              height={100}
              alt="Logo"
            />
            <h5 className="text-black font-bold text-base lg:flex justify-center items-center hidden">
              Layanan Kolaborasi Global
            </h5>
          </div>
          <div className="lg:flex  text-white hidden">
            <Link
              href="#about"
              className={`flex items-center px-5 py-6 transition-all hover:bg-hover text-black ${
                activeSection === "about"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("about")}
            >
              About Us
            </Link>
            <Link
              href="#challenges"
              className={`flex items-center px-5 py-6 transition-all hover:bg-hover text-black ${
                activeSection === "challenges"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("challenges")}
            >
              Challenges
            </Link>
            <Link
              href="#solutions"
              className={`flex items-center px-5 py-6 transition-all hover:bg-hover text-black ${
                activeSection === "solutions"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("solutions")}
            >
              Solutions
            </Link>
            <Link
              href="#goals"
              className={`flex items-center px-5 py-6 transition-all hover:bg-hover text-black ${
                activeSection === "goals"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("goals")}
            >
              Goals
            </Link>
            <Link
              href="#contact"
              className={`flex items-center px-5 py-6 transition-all hover:bg-hover text-black ${
                activeSection === "contact"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("contact")}
            >
              Contact Us
            </Link>
          </div>
          <button className="text-black lg:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              /* Menampilkan tombol tutup (X) saat menu terbuka */
              <AiOutlineClose className="text-2xl" />
            ) : (
              /* Menampilkan tombol hamburger saat menu tertutup */
              <RiMenu3Fill className="text-2xl" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex justify-center items-center h-screen flex-col text-black gap-2.5">
            <Link
              href="#about"
              className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
                activeSection === "about"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("about")}
            >
              About Us
            </Link>
            <Link
              href="#challenges"
              className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
                activeSection === "challenges"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("challenges")}
            >
              Challenges
            </Link>
            <Link
              className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
                activeSection === "solutions"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("solutions")}
              href="#solutions"
            >
              Solutions
            </Link>
            <Link
              className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
                activeSection === "goals"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("goals")}
              href="#goals"
            >
              Goals
            </Link>
            <Link
              className={`flex items-center justify-center w-full px-6 py-3 transition-all hover:bg-hover text-black ${
                activeSection === "contact"
                  ? "font-bold text-primary font-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => handleSectionClick("contact")}
              href="#contact"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
