import React from "react";
import { RiHome5Line, RiMessengerLine, RiSearchLine } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { RiListSettingsLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="h-[96px] px-[15px] flex items-center shadow-sm bg-white sticky top-0 z-50">
      <div className="grid grid-cols-2 w-full">
        <div className="flex items-center">
          <div className="w-[280px] pl-[10px] flex items-center">
            <h4 className="ml-[5px] text-[32px] text-[#05f] font-extrabold">
              Oh Yes.
            </h4>
          </div>
          <div className="bg-[#eeeeee] w-[350px] flex items-center rounded-3xl px-[16px] py-[10px]">
            <span className="text-[25px] text-[#ddd]">
              <RiSearchLine />
            </span>
            <input
              type="text"
              className="ml-[5px] text-[14px] w-full border-0 outline-none bg-transparent"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div className="flex items-center gap-[10px] ml-[16px]">
            <div className="w-[50px] h-[50px] text-[25px] bg-[#eee] rounded-3xl flex items-center justify-center text-[#c0c0c0]">
              <RiHome5Line />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-[20px]">
            <div className="w-[30px] h-[30px] flex items-center justify-center text-[25px] text-[#05f]">
              <RiNotification3Line />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center text-[25px] text-[#05f]">
              <RiMessengerLine />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center text-[25px] text-[#05f]">
              <RiListSettingsLine />
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
