import React from "react";

function StoryItem() {
  return (
    <div className="w-[125px] h-[200px] rounded-lg flex-shrink-0 relative overflow-hidden">
      <img
        className="inset-0 w-full h-full object-cover"
        src="https://channel.mediacdn.vn/2021/11/9/photo-1-1636469085362426782645.jpg"
        alt=""
      />
      <div className="absolute bottom-[10px] left-[50%] translate-x-[-50%] ">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden m-auto border-white border-2">
          <img
            className="w-full h-full object-cover"
            src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"
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
