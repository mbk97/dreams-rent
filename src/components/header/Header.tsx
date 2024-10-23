import React from "react";
import floatImg from "assets/images/breadcrumbright.png";
import floatImgTwo from "assets/images/breadcrumbleft.png";

const Header = () => {
  return (
    <header className="bg-[#201F1D] h-[175px] md:h-[202px] w-[100%] relative grid place-items-center">
      <div>
        <h2 className="font-bold text-[32px] mb-[15px] md:text-[36px] text-center text-[white]">
          Chevrolet Camaro
        </h2>
        <div className="flex gap-3 justify-center text-white">
          <p>
            Home <span>/</span>
          </p>
          <p>
            Listings <span>/</span>
          </p>{" "}
          <p className="text-primary"> Chevrolet Camaro</p>
        </div>
      </div>
      <div className="absolute top-10 right-[120px]  hidden lg:block">
        <img src={floatImg} alt="" />
      </div>
      <div className="absolute bottom-0 left-[0px] hidden lg:block">
        <img
          src={floatImgTwo}
          alt=""
          className="h-[180px] w-[393px] object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
