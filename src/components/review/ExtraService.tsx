import React from "react";
import additional from "assets/svgs/additional.svg";
import childSafety from "assets/svgs/child-safety.svg";
import express from "assets/svgs/express.svg";
import fuel from "assets/svgs/fuel.svg";
import gps from "assets/svgs/gps.svg";
import radio from "assets/svgs/radio.svg";
import roadAssist from "assets/svgs/road-assit.svg";
import wifi from "assets/svgs/wifi.svg";
import Line from "components/common/Line";

const ExtraService = () => {
  const features = [
    { id: 1, img: gps, text: "GPS Navigation Systems" },
    { id: 2, img: wifi, text: "Wi-Fi Hotspot" },
    { id: 3, img: childSafety, text: "Child Safety Seats" },
    { id: 4, img: fuel, text: "Fuel Options" },
    { id: 5, img: roadAssist, text: "Roadside Assistance" },
    { id: 6, img: radio, text: "Satellite Radio" },
    { id: 7, img: additional, text: "Additional Accessories" },
    { id: 8, img: express, text: "Express Check-in/out" },
  ];
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Extra Service</h2>
      <Line />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {features.map((feat) => {
          return (
            <div className="flex gap-3 items-center mb-[15px]" key={feat.id}>
              <div className="grid place-items-center w-[26px] h-[26px] rounded-[5px] border border-[#DBDBDB]">
                <img src={feat.img} alt={feat.text} className="w-[20px]" />
              </div>
              <p className="text-[#111] text-[14px]">{feat.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtraService;
