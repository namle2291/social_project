import React from "react";

export default function ContactItem() {
  return (
    <div className="py-[8px]">
      <div>
        <div className="flex items-center gap-[5px]">
          <div className="w-[35px] h-[35px] overflow-hidden rounded-full shadow">
            <img
              src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#6c757d] text-[14px] font-bold">
            Le Son Nam
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
