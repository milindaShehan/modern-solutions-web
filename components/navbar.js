"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdWifiCalling3 } from "react-icons/md";

export default function Navbar() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [origin, setOrigin] = useState('');
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      
      <header className="sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100  z-40 bg-white  bg-opacity-80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="#"
              className="text-xl font-semibold flex items-center gap-x-2"
            >
              <img
                src="/LOGOModern.png"
                alt="Archix"
                className=" h-16"
              />
              {/* <span className="text-3xl font-bold text-gray-700 ">
                Ceylon<span className="text-primary">Rent</span>
              </span> */}
            </Link>
          </div>
          <div
            className={`
        absolute top-full  left-0 bg-white  lg:bg-transparent border-b border-gray-200  py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
        ${
          navIsOpened
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
        }
      `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700  lg:w-full lg:justify-center">
              <li>
                <Link
                  href={`${origin}#`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`${origin}#services`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={`${origin}/vehicle`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Rent
                </Link>
              </li>
              <li>
                <Link
                  href={`${origin}#vehicles`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href={`${origin}#clients`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href={`${origin}#contact`}
                  className="relative py-2.5 duration-300 ease-linear hover:text-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Link
                href="tel:+94711662297"
                className="px-6 items-center h-12 rounded-3xl text-pink-700 text-white  bg-primary  duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                <MdWifiCalling3 className="text-white mr-4" />
                Call Now
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100  pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
            flex h-0.5 w-6 rounded bg-gray-800  transition duration-300
            ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
          `}
              />
              <span
                aria-hidden={true}
                className={`
            mt-2 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
            ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
            `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
