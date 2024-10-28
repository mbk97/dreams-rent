import Line from "components/common/Line";
import { galleryData } from "data/data";
import React from "react";

const Gallery = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Gallery</h2>
      <Line />
      <div className="flex items-center gap-3 flex-wrap ">
        {galleryData.map((data) => {
          return (
            <img
              src={data.image}
              alt=""
              key={data.id}
              className="rounded-[10px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
