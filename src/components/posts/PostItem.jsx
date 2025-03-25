import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiHeartLine, RiMessage3Line } from "react-icons/ri";
import ReactItem from "../reacts/ReactItem";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";

function PostItem() {
  return (
    <div className="p-[24px] rounded-[15px] bg-white shadow-md mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
            <img
              className="w-full h-full object-cover"
              src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Nam Le</h4>
            <span className="text-[13px] text-gray-400">2 tiếng trước</span>
          </div>
        </div>
        <div className="w-[45px] h-[45px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
          <BiDotsHorizontalRounded className="text-[20px]" />
        </div>
      </div>
      {/* Body */}
      <div>
        <p className="text-gray-400 text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
        </p>
        <div className="my-[15px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-[130px]">
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src="https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496"
                alt=""
              />
            </div>
            <div className="h-[130px]">
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src="https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496"
                alt=""
              />
            </div>
            <div className="h-[130px]">
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src="https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ReactItem
            icon={<AiOutlineLike className="text-white" />}
            background="#1877f2"
            textColor="#fff"
          />
          <ReactItem
            icon={<RiHeartLine className="text-white" />}
            background="#e44d26"
            textColor="#fff"
          />
          <ReactItem
            icon={<RiMessage3Line className="text-[20px]" />}
            text={"22 bình luận"}
            textSize={"14px"}
          />
        </div>
        <div className="text-[16px] cursor-pointer flex items-center gap-2">
          <AiOutlineShareAlt /> <span>Chia sẻ</span>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
