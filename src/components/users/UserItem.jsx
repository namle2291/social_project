import React from "react";

export default function ContactItem({ data }) {
  console.log(data);

  return (
    <div className="py-[8px]">
      <div>
        <div className="flex items-center gap-[5px]">
          <div className="w-[35px] h-[35px] overflow-hidden rounded-full shadow">
            <img
              src={"http://10.10.3.64:5055/img/avatars/" + data?.avatar}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#6c757d] text-[14px] font-bold">
            {data?.name}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
