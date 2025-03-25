import React, { useState } from "react";
import clsx from "clsx";

import { BiImage } from "react-icons/bi";

function CreatePost() {
  const [btnDisabled, setBtnDisabled] = useState(true);

  return (
    <div className="mt-4 bg-white rounded-lg p-[25px] shadow-md">
      <div className="relative">
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden absolute left-[10px] top-[10px]">
          <img
            className="w-full h-full object-cover"
            src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"
            alt=""
          />
        </div>
        <textarea
          className="border rounded-md w-full h-[100px] outline-none px-[50px] py-[10px] resize-none"
          name=""
          id=""
          placeholder="Bạn đang nghĩ gì?"
          onChange={(e) => {
            e.target.value.length > 3
              ? setBtnDisabled(false)
              : setBtnDisabled(true);
          }}
        ></textarea>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <span>
            <BiImage className="text-[22px] text-green-600" />
          </span>
          <span className="text-[13px0] text-gray-400">Ảnh/Video</span>
        </div>
        <div>
          <button
            className={clsx(
              "rounded-md px-[20px] py-[5px]",
              btnDisabled
                ? "bg-gray-200 text-gray-400"
                : "bg-blue-500 text-white"
            )}
          >
            Đăng
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
