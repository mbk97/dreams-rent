import Line from "components/common/Line";
import React from "react";

const Policies = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Policies</h2>
      <Line />
      <div className="h-auto md:h-[77px] flex justify-between items-center flex-wrap gap-2  bg-[#F2F7F6] rounded-[5px] p-[15px] mb-6">
        <div>
          <h6 className="text-[18px] text-[#111111] font-medium">
            Cancellation Charges
          </h6>
          <p className="text-[14px]">
            Cancellation charges will be applied as per the policy
          </p>
        </div>
        <p className="text-[rgba(13,110,253,1)]">Know More</p>
      </div>
      <div className="h-auto md:h-[77px] flex justify-between items-center flex-wrap gap-2  bg-[#F2F7F6] rounded-[5px] p-[15px]">
        <div>
          <h6 className="text-[18px] text-[#111111] font-medium">Policy</h6>
          <p className="text-[14px]">
            I hereby agree to the terms and conditions of the Lease Agreement
            with Host
          </p>
        </div>
        <p className="text-[rgba(13,110,253,1)]">View Details</p>
      </div>
    </div>
  );
};

export default Policies;
