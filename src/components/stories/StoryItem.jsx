import React from "react";

function StoryItem({ data }) {
  return (
    <div className="w-[125px] h-[200px] rounded-lg flex-shrink-0 relative overflow-hidden">
      <img
        className="inset-0 w-full h-full object-cover"
        src={data?.src}
        alt=""
      />
      <div className="absolute bottom-[10px] left-[50%] translate-x-[-50%] ">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden m-auto border-white border-2">
          <img
            className="w-full h-full object-cover"
            src={data?.user?.avatar}
            alt=""
          />
        </div>
        <div>
          <span className="text-white">Nam Le</span>
        </div>
      </div>
    </div>
  );
}

export default StoryItem;
