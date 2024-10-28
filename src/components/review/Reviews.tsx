import React from "react";
import Line from "components/common/Line";
import johnson from "assets/images/johnson.jpg";
import casandra from "assets/images/casandra.jpg";
import { FaStar } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import CustomButton from "components/common/CustomButton";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      text: "Service",
      value: "4.6",
      width: "70%",
    },
    {
      id: 2,
      text: "Location",
      value: "4.8",
      width: "85%",
    },
    {
      id: 3,
      text: "Value for Money",
      value: "3.0",
      width: "60%",
    },
    {
      id: 4,
      text: "Facilities",
      value: "4.5",
      width: "65%",
    },
    {
      id: 5,
      text: "Cleanliness",
      value: "4.8",
      width: "90%",
    },
  ];

  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Reviews</h2>
      <Line />
      <section className="flex flex-col gap-3 md:flex-row md:gap-5">
        <div className="flex items-center justify-center flex-col border border-[#DBDBDB] rounded-[5px] w-[100%] md:w-[250px] h-[200px] px-[0px]">
          <h2 className="text-[#127384] text-[24px] font-medium md:text-[48px] m-0">
            4.5
            <span className="md:text-[18px] text-[14px]">/5</span>
          </h2>
          <p className="text-center">Excellent</p>
          <p className="text-center text-[#111111] mt-1">
            Based on 256 Reviews
          </p>
        </div>
        <div className=" w-[100%] mt-[15px]">
          {reviewsData.map((review) => {
            return (
              <div
                className=" flex items-center justify-between mb-[10px]"
                key={review.id}
              >
                <p className="text-[14px] text-[#111111]">{review.text}</p>
                <div className="flex items-center justify-end gap-1 w-[65%] md:w-[auto]">
                  <div className="bg-[#e9ecef] rounded-xl h-[6px] w-full  lg:w-[306.1px]">
                    <div
                      className="bg-[#FFA633] rounded-xl h-[6px]"
                      style={{
                        width: review.width,
                      }}
                    ></div>
                  </div>
                  <p className="text-[#676767] ml-[10px]">{review.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border rounded-[10px] border-[#F4F4F4] p-[15px] mt-4">
        <h2 className="text-[#111111] text-[16px]  bigTablet:text-[18px] font-medium">
          Showing 3 guest reviews
        </h2>
        <div className="border-b border-b-[#DBDBDB] mb-[15px] pb-[15px]" />

        <section>
          <div className="block md:flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <img
                src={johnson}
                alt={"johnson"}
                className="w-[60px] h-[60px] rounded-[10px]"
              />
              <div>
                <p className="text-[#111111] font-medium text-[18px] m-0">
                  Johnson
                </p>
                <p className="text-[14px] text-[#676767] m-0">02 Jan 2023</p>
              </div>
            </div>
            <div className="flex items-center md:mt-0 mt-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((index) => {
                  return <FaStar key={index} className="text-primary mr-1" />;
                })}
              </div>
              <p className="text-[#676767] text-[14px]">(5.0)</p>
            </div>
          </div>
          <p className="mt-[10px]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.It was popularised in the 1960s
          </p>
          <div className="block md:flex  justify-between mt-4">
            <CustomButton
              text="Reply"
              Icon={FaReply}
              width="86.41px"
              bgColor="#127384"
            />
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <p>10</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsDown />
                <p>12</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegHeart />
                <p>15</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-t-[#dbdbdb] py-[15px] mt-[15px] pl-[20px] md:pl-[40px] bigTablet:pl-[80px]">
          <div className="block md:flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <img
                src={johnson}
                alt={"johnson"}
                className="w-[60px] h-[60px] rounded-[10px]"
              />
              <div>
                <p className="text-[#111111] font-medium text-[18px] m-0">
                  Johnson
                </p>
                <p className="text-[14px] text-[#676767] m-0">02 Jan 2023</p>
              </div>
            </div>
            <div className="flex items-center md:mt-0 mt-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((index) => {
                  return <FaStar key={index} className="text-primary mr-1" />;
                })}
              </div>
              <p className="text-[#676767] text-[14px]">(5.0)</p>
            </div>
          </div>
          <p className="mt-[10px]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.It was popularised in the 1960s
          </p>
          <div className="block md:flex  justify-between mt-4">
            <CustomButton
              text="Reply"
              Icon={FaReply}
              width="86.41px"
              bgColor="#127384"
            />
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <p>10</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsDown />
                <p>12</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegHeart />
                <p>15</p>
              </div>
            </div>
          </div>
        </section>
        <section className="border border-[#F4F4F4] rounded-[1px] p-[15px]">
          <div className="block md:flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <img
                src={casandra}
                alt={"casandra"}
                className="w-[60px] h-[60px] rounded-[10px]"
              />
              <div>
                <p className="text-[#111111] font-medium text-[18px] m-0">
                  Casandra
                </p>
                <p className="text-[14px] text-[#676767] m-0">
                  Reviewed 25 March 2024
                </p>
              </div>
            </div>
            <div className="flex items-center md:mt-0 mt-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((index) => {
                  return <FaStar key={index} className="text-primary mr-1" />;
                })}
              </div>
              <p className="text-[#676767] text-[14px]">(5.0)</p>
            </div>
          </div>
          <p className="mt-[10px]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.It was popularised in the 1960s
          </p>
          <div className="block md:flex  justify-between mt-4">
            <CustomButton
              text="Reply"
              Icon={FaReply}
              width="86.41px"
              bgColor="#127384"
            />
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <p>10</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsDown />
                <p>12</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegHeart />
                <p>15</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Reviews;
