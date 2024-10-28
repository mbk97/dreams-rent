import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaStar } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { BiMapPin } from "react-icons/bi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteering2Line } from "react-icons/ri";
import { TbEngine } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import CustomButton from "components/common/CustomButton";
import { vehicles } from "data/data";
import { Navigation } from "swiper/modules";
import "./style.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const InterestedSection = () => {
  return (
    <div className="px-[15px]">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-2 md:hidden">
            <button className="custom-prev-arrow bg-[#ffffff] h-[55px] w-[55px] rounded-[50%] shadow-[0px 4px 24px rgba(255, 255, 255, 0.2)]  transition-all hover:bg-primary flex items-center justify-center cursor-pointer">
              <IoIosArrowRoundBack size={25} />
            </button>
            <button className="custom-next-arrow bg-[#ffffff] h-[55px] w-[55px] rounded-[50%] shadow-[0px 4px 24px rgba(255, 255, 255, 0.2)]  transition-all hover:bg-primary flex items-center justify-center cursor-pointer">
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
          <h3 className="text-[24px] text-[#111111] font-bold">
            You May be Interested In
          </h3>
        </div>
        <div className="hidden gap-2 md:flex">
          <button className="custom-prev-arrow bg-[#ffffff] h-[55px] w-[55px] rounded-[50%] shadow-[0px 4px 24px rgba(255, 255, 255, 0.2)]  transition-all hover:bg-primary flex items-center justify-center cursor-pointer">
            <IoIosArrowRoundBack size={25} />
          </button>
          <button className="custom-next-arrow bg-[#ffffff] h-[55px] w-[55px] rounded-[50%] shadow-[0px 4px 24px rgba(255, 255, 255, 0.2)]  transition-all hover:bg-primary flex items-center justify-center cursor-pointer">
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={{
          nextEl: ".custom-next-arrow",
          prevEl: ".custom-prev-arrow",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile screens
          },
          768: {
            slidesPerView: 2, // Tablet screens
          },
          820: {
            slidesPerView: 2.5, // Screens 820px and above
          },
          1400: {
            slidesPerView: 3, // Screens 820px and above
          },
        }}
        className="mySwiper mt-5"
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <div className=" w-[100%] xl:w-[380px] mt-10">
              <div className="relative">
                {vehicle.featured && (
                  <div className="featured_wrapper">
                    <p className="featured">Featured</p>
                  </div>
                )}
                {vehicle.topRated && (
                  <div className="featured_wrapper">
                    <p className="top_rated">Top Rated</p>
                  </div>
                )}
                <img src={vehicle.imgSrc} className="rounded-[10px]" alt="" />
                <div className="absolute bottom-[10px] left-2">
                  {vehicle.subName && (
                    <p className="bg-[#ffffff] py-[1px] px-[6px] text-[#111] text-[14px] rounded-[5px]">
                      {vehicle.subName}
                    </p>
                  )}
                </div>
                <div className="absolute bottom-[-18px] right-2">
                  <img
                    src={vehicle.user}
                    className="rounded-[50%] w-[35px] h-[35px] border-2 border-[#ffffff]"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-[20px] text-[#111] font-medium mb-[5px]">
                  {vehicle.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center md:mt-0 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <FaStar key={index} className="text-primary mr-1" />
                      ))}
                    </div>
                    <p className="text-[#676767] text-[14px] mr-1">
                      ({vehicle.rating})
                    </p>
                    <p className="text-[#676767] text-[14px]">
                      {vehicle.reviews} Reviews
                    </p>
                  </div>
                  <div className="bg-[#127384] rounded-[5px] py-[1px] px-[4px] flex items-center justify-center gap-[0.6px] w-[51px] h-[20px] text-white">
                    <BiMapPin />
                    <p className="text-[12px]">{vehicle.distance}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="flex items-center gap-1">
                  <TbManualGearbox />
                  <p className="text-[14px]">{vehicle.features.gearbox}</p>
                </div>
                <div className="flex items-center gap-1">
                  <IoSpeedometerOutline />
                  <p className="text-[14px]">{vehicle.features.speed}</p>
                </div>
                <div className="flex items-center gap-1">
                  <BsFillFuelPumpFill />
                  <p className="text-[14px]">{vehicle.features.fuel}</p>
                </div>
                <div className="flex items-center gap-1">
                  <RiSteering2Line />
                  <p className="text-[14px]">{vehicle.features.steering}</p>
                </div>
                <div className="flex items-center gap-1">
                  <TbEngine />
                  <p className="text-[14px]">{vehicle.features.modelYear}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaUserAlt />
                  <p className="text-[14px]">{vehicle.features.capacity}</p>
                </div>
              </div>

              <div className="mt-3">
                <div className="bg-[#F2F7F6] p-[10px] flex items-center justify-between h-[48px]">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline />
                    <p className="text-[14px]">{vehicle.location}</p>
                  </div>
                  <div className="flex items-center">
                    <h5 className="text-[24px] font-bold text-[#FF0000]">
                      ${vehicle.pricePerDay}
                    </h5>
                    <p className="text-[14px] ml-[7px]">/ Day</p>
                  </div>
                </div>
                <div className="mt-3">
                  <CustomButton width="w-[100%]" text="Rent Now" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InterestedSection;
