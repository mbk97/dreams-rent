import Line from "components/common/Line";
import React from "react";

const Location = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">View Car Location</h2>
      <Line />
    </div>
  );
};

export default Location;
