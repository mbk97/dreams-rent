import React from "react";
import Line from "components/common/Line";
import { FiFileText } from "react-icons/fi";

const PricingDetails = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Pricing Details</h2>
      <Line />

      <div className="bg-[#F2F7F6] p-[15px] rounded-[5px] flex justify-between items-center">
        <p className="text-[14px]">Per day (8 Hours)</p>
        <p className="font-medium text-[18px] text-[#111111]">$300</p>
      </div>
      <div className=" flex justify-end mt-6">
        <div className="flex text-[#127384] items-center gap-2">
          <FiFileText />
          <p className=" text-[14px]">Fare Summary</p>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
