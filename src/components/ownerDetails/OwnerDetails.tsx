import Line from "components/common/Line";
import React from "react";
import ownerImg from "assets/images/owner.jpg";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import CustomButton from "components/common/CustomButton";
import { FaWhatsapp } from "react-icons/fa";

const OwnerDetails = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Listing Owner Details</h2>
      <Line />

      <div className="bg-[#F2F7F6] p-[15px] rounded-[5px]  flex items-center ">
        <div className="relative">
          <img
            src={ownerImg}
            alt="owner"
            className="w-[60px] h-[60px] rounded-[50%] border-2 border-[#ffffff]"
          />
          <div className="absolute bottom-[3px] right-[-1px] ">
            <MdVerified className="text-[#24bd34]" />
          </div>
        </div>
        <div className="ml-2">
          <p className="text-[18px] text-[#000000]">Brooklyn Cars</p>
          <div className="flex">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <FaStar key={index} className="text-primary" size={14} />
                );
              })}
            </div>
            <p className="text-[14px] ml-[5px]">(5.0)</p>
          </div>
        </div>
      </div>

      <div className="mt-5" />

      <div className="flex items-center justify-between  pb-3 border-b-2">
        <p className="text-[#111111]">Email</p>
        <p className="w-[160px] text-left">info@example.com</p>
      </div>
      <div className="flex items-center justify-between mt-2 pb-3 border-b-2">
        <p className="text-[#111111]">Phone Number</p>
        <p className="w-[160px] text-left">+1 14XXX XXX78</p>
      </div>
      <div className="flex items-center justify-between mt-2 pb-3">
        <p className="text-[#111111]">Location</p>
        <p className="w-[160px]">
          4635 Pheasant Ridge Road, City Hollywood, USA
        </p>
      </div>

      <div>
        <CustomButton text="Message to owner" width="100%" bgColor="#111111" />
        <div className="flex items-center justify-center mt-3 gap-2 text-[#127384]">
          <FaWhatsapp />
          <p className="font-medium ">Chat Via Whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetails;
