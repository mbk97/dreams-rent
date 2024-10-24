import React from "react";
import carImg from "assets/svgs/car-icon.svg";
import { FaStar } from "react-icons/fa6";
import CustomButton from "components/common/CustomButton";
import { GrLocation } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { BiCalendarEdit } from "react-icons/bi";
import { IoGitCompareOutline } from "react-icons/io5";

const Rating = () => {
  return (
    <div className="flex h-auto lg:h-[168.59px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] lg:py-[30px] shadow-sm bg-white ">
      <div className="flex mx-auto justify-between w-[100%]">
        <section className="mx-auto ">
          <div className="flex items-center ">
            <div className="bg-[#111111] mr-1 w-[24px] h-[24px] rounded-[50%] grid place-items-center">
              <img src={carImg} alt="" className="" />
            </div>
            <p className="text-[14px] text-[#676767]">Sedan</p>
            <div className="bg-[#127384] py-[1px] px-[5px] rounded-[5px] h-[26px] ml-3">
              <p className="text-white font-medium">2023</p>
            </div>
            <div className="flex ml-3">
              {[1, 2, 3, 4, 5].map((index) => {
                return <FaStar key={index} className="text-primary mr-1" />;
              })}
            </div>
            <p className="text-[#676767] text-[14px]">(5.0)</p>
          </div>
          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-4  lg:gap-16 w-[100%]">
            <div>
              <h3 className="text-[38px] font-medium text-[#111111]">
                Chevrolet Camaro
              </h3>
              <div className="grid grid-cols-1 md:flex lg:gap-5 gap-2">
                <div className="flex items-center">
                  <GrLocation size={14} className="text-[#676767] mr-1" />
                  <p className="text-[14px] text-[#676767]">
                    Location : Miami St, Destin, FL 32550, USA
                  </p>
                  <div className="ml-5 bg-[#DBDBDB] w-[1px] h-[18px] hidden lg:block"></div>
                </div>
                <div className="flex items-center">
                  <IoEyeOutline size={14} className="text-[#676767] mr-1" />
                  <p className="text-[14px] text-[#676767]">Views</p>
                  <div className="ml-5 bg-[#DBDBDB] w-[1px] h-[18px] hidden lg:block"></div>
                </div>
                <div className="flex items-center">
                  <IoCarOutline size={14} className="text-[#676767] mr-1" />
                  <p className="text-[14px] text-[#676767]">
                    Views : Listed on: 01 Jan, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <CustomButton
                text="Total Booking : 300"
                width="220px"
                bgColor="#127384"
                Icon={BiCalendarEdit}
              />
              <CustomButton
                text="Compare"
                width="120px"
                bgColor="#F2F7F6"
                textColor="#676767"
                Icon={IoGitCompareOutline}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rating;
