import React from "react";
import { FcReddit } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import {
  BiBell,
  BiMessage,
  BiSlider,
} from "react-icons/bi";

export default function Header() {
  return (
    <div className="h-[96px] px-[15px] flex items-center shadow-sm bg-white">
      <div className="grid grid-cols-2 w-full">
        <div className="flex items-center">
          <div className="w-[280px] pl-[10px] flex items-center">
            <span className="text-[32px] text-[#10d876]">
              <FcReddit />
            </span>
            <h4 className="ml-[5px] text-[32px] text-[#05f] font-extrabold">
              Oh Yes.
            </h4>
          </div>
          <div className="bg-[#eeeeee] w-[350px] flex items-center rounded-3xl px-[16px] py-[13px]">
            <span className="text-[20px] text-[#ddd]">
              <IoSearch />
            </span>
            <input
              type="text"
              className="ml-[5px] text-[14px] w-full border-0 outline-none bg-transparent"
              placeholder="Start typing to search..."
            />
          </div>
          <div className="flex items-center gap-[10px] ml-[16px]">
            <div className="w-[50px] h-[50px] text-[30px] bg-[#eee] rounded-3xl flex items-center justify-center text-[#c0c0c0]">
              <IoHomeOutline />
            </div>
            <div className="w-[50px] h-[50px] text-[30px] bg-[#eee] rounded-3xl flex items-center justify-center text-[#c0c0c0]">
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-[20px]">
            <div className="w-[30px] h-[30px] text-[30px] text-[#05f]">
              <BiBell />
            </div>
            <div className="w-[30px] h-[30px] text-[30px] text-[#05f]">
              <BiMessage />
            </div>
            <div className="w-[30px] h-[30px] text-[30px] text-[#05f]">
              <BiSlider />
            </div>
            <div className="w-[35px] h-[35px] overflow-hidden shadow rounded-full">
              <img
                className="w-full h-full object-contain"
                src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
