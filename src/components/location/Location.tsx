import React from "react";
import Line from "components/common/Line";
import map from "assets/images/map.png";

const Location = () => {
  return (
    <div className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px] shadow-[0px 4px 24px rgba(225, 225, 225, 0.25)]">
      <h2 className="text-[#111] text-[18px]">View Car Location</h2>
      <Line />
      <div>
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Location;
