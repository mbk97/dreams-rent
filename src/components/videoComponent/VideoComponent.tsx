import React from "react";
import Line from "components/common/Line";
import videoThumb from "assets/images/video-img.jpg";

const VideoComponent = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto] bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Video</h2>
      <Line />
      <div className="relative">
        <img
          src={videoThumb}
          alt="Video Thumbnail"
          className="w-full rounded-[10px]"
        />
        <button
          className="absolute inset-0 m-auto w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-[black] text-[14px] font-bold transition-colors duration-300 hover:bg-primary hover:text-[white]"
          style={{
            top: "10%",
            left: "10%",
            transform: "translate(-50%, -50%)",
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default VideoComponent;
