import React from "react";
import ReviewBar from "./ReviewBar";
import Image from "next/image";
import line from "@/public/line.svg";
import mylogo from "@/public/logo_white.png";
import navigation from "../data/navigation";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import UserBanner from "./UserBanner";
import { FaSearch } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="left flex-1 md:flex hidden gradientbg   flex  flex-col justify-between h-full px-2 pb-4">
      <div className=" pt-4 flex justify-start w-full items-center flex-col">
        <div className="mt-4 flex items-center justify-start w-full text-white">
          <Image src={mylogo} alt="Logo" width={50} />

          <h3 className="text-2xl font-bold text-[#6AF1F1]">SpaceBud</h3>
        </div>
        <div className="search bg-[#1B3F7A] w-full mt-4 rounded-sm flex items-center px-4 gap-2">
          <FaSearch color="#97BFFF" size={16} />
          <input
            type="Search"
            placeholder="Search"
            className="px-2 py-4 w-full   rounded-sm bg-transparent text-white focus:outline-none"
          />
        </div>
        {/* navigations */}
        <nav className="w-full px-2 mt-4  py-2 rounded-sm flex  flex-col gap-4">
          {navigation.map((item, index) => {
            const Icon = item.Icons;
            return (
              <div
                className=" p-2 rounded-sm flex justify-between w-full items-center  transition-colors duration-300 cursor-pointer"
                key={index}
              >
                <div className="flex items-center justify-center gap-4">
                  {Icon && <Icon size={20} color="#97BFFF" />}
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#6AF1F1]"
                  >
                    {item.name}
                  </Link>
                </div>
                <RxCaretRight size={24} color="#97BFFF" />
              </div>
            );
          })}
        </nav>
      </div>
      {/* bottom items */}
      <UserBanner />
    </div>
  );
};

export default SideNav;
