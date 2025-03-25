import React from "react";

import clsx from "clsx";

function ReactItem({ icon, text, background, textColor, textSize }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div
        className={clsx(
          "w-[25px] h-[25px] rounded-full flex items-center justify-center"
        )}
        style={{ background: background, color: textColor }}
      >
        <span>{icon}</span>
      </div>
      {text && <span style={{ fontSize: textSize }}>{text}</span>}
    </div>
  );
}

export default ReactItem;
