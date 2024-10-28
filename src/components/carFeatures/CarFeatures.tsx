import React from "react";
import Line from "components/common/Line";
import { IoCheckmarkDone } from "react-icons/io5";

const CarFeatures = () => {
  const features = [
    { id: 1, text: "Multi-zone A/C" },
    { id: 2, text: "Heated front seats" },
    { id: 3, text: "Android Auto" },
    { id: 4, text: "Navigation system" },
    { id: 5, text: "Premium sound system" },
    { id: 6, text: "Bluetooth" },
    { id: 7, text: "Keyless Start" },
    { id: 8, text: "Memory seat" },
    { id: 9, text: "6 Cylinders" },
    { id: 10, text: "Adaptive Cruise Control" },
    { id: 11, text: "Intermittent wipers" },
    { id: 12, text: "4 power windows" },
  ];
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Car Features</h2>
      <Line />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {features.map((feat) => {
          return (
            <div className="flex gap-3 items-center mb-[15px]" key={feat.id}>
              <div className="grid place-items-center w-[16px] h-[16px] rounded-[50%] border bg-[#127384]">
                <IoCheckmarkDone className="text-white" size={10} />
              </div>
              <p className="text-[#111] text-[14px]">{feat.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarFeatures;
