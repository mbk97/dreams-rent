import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import slide1 from "assets/images/slider-01.jpg";
import slide2 from "assets/images/slider-02.jpg";
import slide3 from "assets/images/slider-03.jpg";
import slide4 from "assets/images/slider-04.jpg";
import slide5 from "assets/images/slider-05.jpg";
import thumb1 from "assets/images/slider-thum-01.jpg";
import thumb2 from "assets/images/slider-thum-02.jpg";
import thumb3 from "assets/images/slider-thum-03.jpg";
import thumb4 from "assets/images/slider-thum-04.jpg";
import thumb5 from "assets/images/slider-thum-05.jpg";
import "./style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegHeart, FaWalking } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const CarSelection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const mainSwiperRef = useRef<any | null>(null);

  const largeImages = [
    { id: 1, img: slide1 },
    { id: 2, img: slide2 },
    { id: 3, img: slide3 },
    { id: 4, img: slide4 },
    { id: 5, img: slide5 },
  ];
  const thumbnails = [
    { id: 1, img: thumb1 },
    { id: 2, img: thumb2 },
    { id: 3, img: thumb3 },
    { id: 4, img: thumb4 },
    { id: 5, img: thumb5 },
  ];

  return (
    <div className="h-[auto]  bg-[#fff] rounded-[10px] py-[15px] px-[15px]  shadow-[0px 4px 24px rgba(225, 225, 225, 0.25)]">
      <section className="block md:flex items-center justify-between mb-5 mx-[15px]">
        <div className="flex items-center ">
          <div className="flex items-center bg-[#e6f0f1] rounded-[10px] mr-[15px] w-[135px] px-[9px] py-[5px]">
            <div className=" flex items-center gap-2 ">
              <FaWalking className="text-[#127384]" />
              <p className="text-[#127384] text-[14px]">4.2 Km Away</p>
            </div>
          </div>
          <div className="h-[25px] w-[25px] rounded-[50%] hover:bg-[#127384]  flex items-center justify-center">
            <FaRegHeart className="hover:text-white text-gray-600" />
          </div>
        </div>

        <div className="flex items-center mb-4 md:mb-0 mt-1 md:mt-0">
          <div className="flex items-center text-primary gap-1">
            <IoMdCheckmark />
            <p>Airport delivery</p>
          </div>
          <div className="mx-[5px] text-[#DBDBDB]"> |</div>
          <div className="flex items-center text-[#127384] gap-1">
            <IoMdCheckmark />
            <p>Home delivery</p>
          </div>
        </div>
      </section>

      <div className="image-slider px-[15px]  relative">
        <Swiper
          modules={[Thumbs, Navigation]}
          loop
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          onSwiper={(swiper: any) => (mainSwiperRef.current = swiper)}
          className="main-swiper"
        >
          {largeImages.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.img} alt={`Slide ${image.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="custom-prev"
          onClick={() => mainSwiperRef.current?.slidePrev()}
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          className="custom-next"
          onClick={() => mainSwiperRef.current?.slideNext()}
        >
          <IoIosArrowRoundForward />
        </button>

        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="thumbs-swiper"
        >
          {thumbnails.map((thumbnail) => (
            <SwiperSlide key={thumbnail.id}>
              <img src={thumbnail.img} alt={`Thumbnail ${thumbnail.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarSelection;
