"use client";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              href="/"
              className="flex items-center px-5 py-6 hover:bg-hover hover:text-primary text-black"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="flex items-center px-5 py-6  hover:bg-hover hover:text-primary text-black"
            >
              Challenges
            </Link>
            <Link
              href="/"
              className="flex items-center px-5 py-6  hover:bg-hover hover:text-primary text-black"
            >
              Solutions
            </Link>
            <Link
              href="/"
              className="flex items-center px-5 py-6 hover:bg-hover hover:text-primary text-black"
            >
              Goals
            </Link>
            <Link
              href="/"
              className="flex items-center px-5 py-6  hover:bg-hover hover:text-primary text-black"
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
              href="/"
              className="flex items-center justify-center hover:bg-hover w-full py-3 px-6 hover:font-bold hover:text-primary hover:border-b-2 hover:border-primary transition-all"
            >
              About Us
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center w-full hover:bg-hover py-3 px-6 hover:text-primary"
            >
              Challenges
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center w-full hover:bg-hover py-3 px-6 hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center w-full hover:bg-hover py-3 px-6 hover:text-primary"
            >
              Goals
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center w-full hover:bg-hover py-2.5 px-6 hover:text-primary"
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
