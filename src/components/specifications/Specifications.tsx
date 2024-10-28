import Line from "components/common/Line";
import { carDetails } from "data/data";
import React from "react";

const Specifications = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Specifications</h2>
      <Line />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {carDetails.map((car) => {
            return (
              <div className="flex mb-[10px]" key={car.attribute}>
                <div className="w-[60px] h-[60px] grid place-items-center rounded-[5px] mr-[12px] border border-[#DBDBD]">
                  <img src={car.image} alt={car.attribute} />
                </div>
                <div>
                  <p className="text-[#111] text-[14px] mb-[5px]">
                    {car.attribute}
                  </p>
                  <p className="text-[#676767] text-[14px]">{car.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
