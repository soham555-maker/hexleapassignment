"use client";

import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useEffect, useState } from "react";
import Buttons from "../Utils/Buttons";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handelNav = () => {
    setMenuOpen(!menuOpen);
  };
  const path = usePathname();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <nav className="navbar max-[320px]:mb-4 mb-5 sm:mb-6 md:mb-8  ">
      <div className="fixed z-50 w-full max-[320px]:h-[50px] h-[50px] sm:h-[60px] md:h-[80px] shadow-2xl bg-primary text-secondary top-0">
        <div className="flex justify-between items-center h-full w-full px-3 2xl:px-16">
          <Link href="/">
            <div className="flex items-center max-[320px]:gap-[3px] gap-[5px] sm:gap-[8px] md:gap-[10px]">
              <div>
                <img
                  src="/image.png"
                  alt="Hexleap"
                  className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out max-[320px]:w-[16px] max-[320px]:h-[16px] w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"
                />
              </div>
              <div>
                <h1 className=" max-[320px]:text-base text-lg md:text-2xl cursor-pointer hover:text-gray-1000  hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out">
                  hexleap
                </h1>
              </div>
            </div>
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex md:gap-8 gap-3">
              <li>
                <Link href="/about">
                  <h1
                    className={` hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text ${path === "about" ? "border-b-[1px]" : ""}  hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out`}
                  >
                    About
                  </h1>
                </Link>
              </li>
              <li>
                <Link href="/whyme">
                  <h1
                    className={` hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text ${path === "whyme" ? "border-b-[1px]" : ""}  hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out`}
                  >
                    WhyMe
                  </h1>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <h1
                    className={` hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text ${path === "contact" ? "border-b-[1px]" : ""}  hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out`}
                  >
                    Contact
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
          <div className="block sm:hidden cursor-pointer" onClick={handelNav}>
            <AiOutlineMenu className="max-[320px]:w-[14px] max-[320px]:h-[14px] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[24px] md:h-[24px]" />
          </div>
          <div className="flex items-center max-[320px]:gap-[3px] gap-[5px] sm:gap-[8px] md:gap-[10px] ">
            <div>
              <Buttons text="get in touch" />
            </div>
            <ThemeSwitch className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-primary p-10 ease-in-out duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
      >
        <div className="flex justify-end w-full items-center pt-[20px]">
          <div className="block sm:hidden cursor-pointer" onClick={handelNav}>
            <AiOutlineClose className="max-[320px]:w-[14px] max-[320px]:h-[14px] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[24px] md:h-[24px]" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/about">
            <h1 className=" max-[320px]:text-[14px] text-[16px] hover:text-gray-1000  hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out">
              About
            </h1>
          </Link>
          <Link href="/whyme">
            <h1 className=" max-[320px]:text-[14px] text-[16px]  hover:text-gray-1000  hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out">
              WhyMe
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className=" max-[320px]:text-[14px] text-[16px] hover:text-gray-1000  hover:bg-gradient3 inline-block hover:text-transparent bg-clip-text hover:border-b-[1px] border-b-gradient3 transition duration-300 ease-in-out">
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
