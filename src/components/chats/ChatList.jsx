import React from "react";
import ContactItem from "../contacts/ContactItem";

export default function ChatList() {
  return (
    <div className="chat-list my-[8px] py-[16px] px-[15px] shadow rounded-md bg-white h-[calc(100vh-120px)] overflow-y-auto sticky top-[104px]">
      <div className="text-[#adb5bd] text-[14px]">Bạn bè</div>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
}
