import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Header from "../components/layouts/Header";
import SideBar from "../components/layouts/SideBar";
import ChatList from "../components/chats/ChatList";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-2 px-[15px]">
          <SideBar />
        </div>
        <div className="col-span-8 py-[20px]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="col-span-2">
          <ChatList />
        </div>
      </div>
    </div>
  );
}
