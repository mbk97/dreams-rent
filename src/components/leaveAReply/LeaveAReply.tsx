import CustomButton from "components/common/CustomButton";
import InputComponent from "components/common/CustomInput";
import Line from "components/common/Line";
import React from "react";
import { FaStar } from "react-icons/fa";

const LeaveAReply = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Leave a Reply</h2>
      <Line />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center">
          <p className="text-[14px] mr-[10px]">Service</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => {
              return <FaStar key={index} className="text-[#dbdbdb] mr-1" />;
            })}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] mr-[10px]">Location</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => {
              return <FaStar key={index} className="text-[#dbdbdb] mr-1" />;
            })}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] mr-[10px]">Facilities</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => {
              return <FaStar key={index} className="text-[#dbdbdb] mr-1" />;
            })}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] mr-[10px]">Value For Money</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => {
              return <FaStar key={index} className="text-[#dbdbdb] mr-1" />;
            })}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] mr-[10px]">Cleanliness</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => {
              return <FaStar key={index} className="text-[#dbdbdb] mr-1" />;
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap   gap-3 lg:gap-8 ">
        <div className="w-[100%]  bigTablet:w-[340.99px] lg:w-[340.99px]">
          <InputComponent
            type="text"
            placeholder=""
            value=""
            name=""
            handleChange={() => {}}
            required={true}
            label="Full Name"
          />
        </div>
        <div className="w-[100%]  bigTablet:w-[340.99px] lg:w-[340.99px]">
          <InputComponent
            type="text"
            placeholder=""
            value=""
            name=""
            handleChange={() => {}}
            required={true}
            label="Email Address"
          />
        </div>
        <div></div>
      </div>
      <div className="lg:mt-3">
        <p className=" block text-[15px] text-[#111] font-medium">Comments</p>
        <textarea
          rows={4}
          className={`w-[100%] border-[#F4F4F4] outline-[#F4F4F4]  rounded-[5px] h-[103.33px]  px-[20px]  bg-[#f5f5f5] focus:bg-transparent transition-colors duration-300"
        `}
        ></textarea>
      </div>
      <div className="flex justify-end mt-3">
        <CustomButton width="148.51px" text="Submit Review" bgColor="#FFA633" />
      </div>
    </div>
  );
};

export default LeaveAReply;
