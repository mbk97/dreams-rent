import Line from "components/common/Line";
import { social_media_icons } from "data/data";
import React from "react";

const Share = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Share</h2>
      <Line />
      <div className="flex items-center gap-2 mt-5">
        {social_media_icons.map(({ Icon, bg, id }) => {
          return (
            <div key={id}>
              <div
                className={`rounded-[50%] grid place-items-center h-[36px] w-[36px] p-2`}
                style={{
                  background: bg,
                }}
              >
                <Icon className="text-[white]" size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Share;
