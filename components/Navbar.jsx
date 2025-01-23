"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from '@/assets/assets'
export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 80) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <>
      <div className="fixed top-0 right-0 w-10/12 sm:max-w-screen -z-10 translate-y-[-80%]">
      </div>
      <nav
        className="w-full bg-darkBG text-white fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex items-center justify-between z-50 border-b-[0.1px] bg-opacity-95
        "
        >
        <h1 className="tracking-wider uppercase cursor-pointer text-2xl font-semibold text-lightGreen">Macro-Rides</h1>
                <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 
        rounded-full px-12 py-3"
        >
          <li>
            <a className="" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="" href="#about">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              How it works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
             Partnership
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Drivers
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              About-us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          
          <a
            className="hidden lg:flex gap-3 items-center px-10 
            py-2.5 rounded-full ml-4 bg-lightGreen text-white"
            href="#contact"
          >
            Contact
            <Image
              src={assets.arrow_icon_dark}
              alt="Arrow"
              className="w-3 h-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              className="w-6 "
              src={isDarkMode ? assets.menu_white : assets.menu_white}
              alt=""
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64
top-0 bottom-0 w-64 z-50 h-screen bg-lightBG transition duration-500 dark:bg-darkHover dark:text-black"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
          <li>
            <a className="" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="" onClick={closeMenu} href="#about">
             Services
            </a>
          </li>
          <li>
            <a className="" onClick={closeMenu} href="#how-it-works">
              How It works
            </a>
          </li>
          <li>
            <a className="" onClick={closeMenu} href="#how-it-works">
              Partnership
              </a>
          </li>
          <li>
            <a className="" onClick={closeMenu} href="#drivers">
              Drivers
            </a>
          </li>
          <li>
            <a className="" onClick={closeMenu} href="#contact">
              About-us
            </a>
          </li>
          <li>
            <a className="border-b flex gap-5 w-32 items-center " onClick={closeMenu} href="#contact">
             Contact us <Image src={assets.arrow_icon_dark} alt="arrow" className="w-3 h-3" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
